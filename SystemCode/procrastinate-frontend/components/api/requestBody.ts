import { APIResult } from "../summarize/models";

export type SpeechToTextRequestBody = {
  username: string;
  email: string;
  audioFile: File;
};

export type SignInRequestBody = {
  username: string;
  password: string;
};

export type SignUpRequestBody = {
  username: string;
  email: string;
  password: string;
};

export type CreateSummaryRequestBody = {
  username: string;
  email: string;
  file?: File;
  file_url?: string;
  uploadId?: string;
};

export const emptyCreateSummaryRequestBody: CreateSummaryRequestBody = {
  username: "",
  email: "",
  file: undefined,
  file_url: "",
  uploadId: "",
};

export type CreateMindmapRequestBody = {
  username: string;
  textFile: File;
};

export const prepareSpeechToTextRequestBody = (
  selectedFile: File,
): SpeechToTextRequestBody => {
  return {
    username: "",
    email: "",
    audioFile: selectedFile,
  };
};

export const prepareSummaryRequestBody = (
  selectedFile: File,
  result?: APIResult,
): CreateSummaryRequestBody => {
  const requestBody = emptyCreateSummaryRequestBody;
  if (selectedFile) {
    requestBody.file = selectedFile;
  } else if (result && result.url != "" && result.uploadId != "") {
    requestBody.file_url = result.url;
    requestBody.uploadId = result.uploadId;
  }
  return requestBody;
};

export const prepareMindmapRequestBody = (
  selectedFile: File,
): CreateMindmapRequestBody => {
  return {
    username: "",
    textFile: selectedFile,
  };
};
