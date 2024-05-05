import { useState } from "react";
import {
  AllowedFileType,
  APIResult,
  allFileTypes,
  emptyResult,
} from "./models";
import {
  ERROR_MSG_INVALID_FILE,
  SUCCESS_MSG,
  CONSOLE_ERROR_MSG,
  BTN_DOWNLOAD_TRANSCRIPTION,
  BTN_SUMMARY,
  BTN_MINDMAP,
  ERROR_MSG_DOWNLOAD,
} from "./strings";
import {
  CreateMindmapRequestBody,
  CreateSummaryRequestBody,
  SpeechToTextRequestBody as SpeechToTextRequestBody,
  prepareMindmapRequestBody,
  prepareSpeechToTextRequestBody,
  prepareSummaryRequestBody,
} from "../api/requestBody";
import {
  createMindMapAPI,
  createSummaryAPI,
  speechToTextAPI,
} from "../api/apiCalls";

export const useFileUploadLogic = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);
  const [result, setResult] = useState<APIResult>(emptyResult);
  const [request, setRequest] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    validateAndSetFile(file);
  };

  const handleFileDrop: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const validateAndSetFile = (file: File | undefined) => {
    if (!file) return;
    const fileType = getFileType(file.name);
    if (fileType && allFileTypes.includes(fileType)) {
      setSelectedFile(file);
      setErrorMessage("");
    } else {
      setSelectedFile(null);
      setErrorMessage(ERROR_MSG_INVALID_FILE);
    }
  };

  const getFileType = (fileName: string): AllowedFileType | undefined => {
    const extension = fileName.split(".").pop();
    return extension ? (`.${extension}` as AllowedFileType) : undefined;
  };

  const handleUpload = async (request: string) => {
    setRequest(request);
    let requestBody;
    let response;
    if (!selectedFile || !request) return;
    try {
      if (request === BTN_DOWNLOAD_TRANSCRIPTION) {
        requestBody = prepareSpeechToTextRequestBody(selectedFile);
        response = await callSpeechToTextAPI(requestBody);
      }
      if (request === BTN_SUMMARY) {
        requestBody = prepareSummaryRequestBody(selectedFile, result);
        response = await callCreateSummaryAPI(requestBody);
      }
      if (request === BTN_MINDMAP) {
        requestBody = prepareMindmapRequestBody(selectedFile);
        response = await callCreateMindMapAPI(requestBody);
      } else {
        response = emptyResult;
      }
      console.log(response);
      if (response) {
        console.log(response);
      } else {
        handleUploadError();
      }
    } catch (error) {
      handleUploadError(error);
    }
  };

  const callSpeechToTextAPI = async (requestBody: SpeechToTextRequestBody) => {
    try {
      const response = await speechToTextAPI(requestBody);
      console.log(response);
      if (response && response.result) {
        handleUploadSuccess(
          response.result,
          "",
          response.fileUrl,
          response.uploadId,
        );
      } else {
        handleUploadError();
      }
    } catch (error) {
      handleUploadError(error);
    }
  };

  const callCreateSummaryAPI = async (
    requestBody: CreateSummaryRequestBody,
  ) => {
    if (!selectedFile) return;
    try {
      const response = await createSummaryAPI(requestBody);
      console.log(response);
      if (response && response.result) {
        handleUploadSuccess(
          "",
          `${response.result}\nTopics: ${response.topics}`,
          response.result_url,
          response.uploadId,
        );
      } else {
        handleUploadError();
      }
    } catch (error) {
      handleUploadError(error);
    }
  };

  const callCreateMindMapAPI = async (
    requestBody: CreateMindmapRequestBody,
  ) => {
    if (!selectedFile) return;
    try {
      const response = await createMindMapAPI(requestBody);
      if (response) {
        handleUploadSuccess("", "", response.result_url, response.uploadId);
      } else {
        handleUploadError();
      }
    } catch (error) {
      handleUploadError(error);
    }
  };
  const handleUploadSuccess = (
    text: string,
    summary: string,
    url?: string,
    uploadId?: string,
  ) => {
    console.log(SUCCESS_MSG);
    setUploadSuccess(true);
    const newResult = emptyResult;
    newResult.text = text ? text : result.text;
    newResult.summary = summary ? summary : result.summary;
    if (url) newResult.url = url;
    if (uploadId) newResult.uploadId = uploadId;
    console.log(newResult);
    setResult(newResult);
  };

  const handleUploadError = (error?: any) => {
    console.error(CONSOLE_ERROR_MSG, error);
  };

  const selectFileButtonClick = () => {
    setUploadProgress(0);
    setUploadSuccess(false);
    setSelectedFile(null);
  };

  const handleFile = (file: File | undefined) => {
    if (!file) return;
    const fileType = getFileType(file.name);
    if (fileType && allFileTypes.includes(fileType)) {
      setSelectedFile(file);
      setErrorMessage("");
    } else {
      setSelectedFile(null);
      setErrorMessage(ERROR_MSG_INVALID_FILE);
    }
  };

  const isAudioFile = (fileName: string): boolean => {
    const audioExtensions = [".mp3", ".wav", ".m4a", ".mp4"];
    const extension = fileName.substring(fileName.lastIndexOf("."));
    return audioExtensions.includes(extension.toLowerCase());
  };

  const handleBackButtonClick = () => {
    setUploadSuccess(false);
    setResult(emptyResult);
  };

  const downloadFileFromS3 = (s3Url: string, fileName: string) => {
    fetch(s3Url)
      .then((response) => response.blob())
      .then((blob) => {
        // Create object URL for the blob
        const url = URL.createObjectURL(blob);

        // Create a link element
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName;

        // Append the link to the body and click it programmatically
        document.body.appendChild(a);
        a.click();

        // Cleanup: remove the link and revoke the object URL
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error(ERROR_MSG_DOWNLOAD, error);
      });
  };

  const handleLinkClick = () => {
    window.open(result.url, "_blank");
  };

  return {
    selectedFile,
    errorMessage,
    uploadProgress,
    uploadSuccess,
    result,
    request,
    handleBackButtonClick,
    isAudioFile,
    handleFileChange,
    handleUpload,
    handleUploadButtonClick: selectFileButtonClick,
    handleFileDrop,
    downloadFileFromS3,
    handleLinkClick,
  };
};
