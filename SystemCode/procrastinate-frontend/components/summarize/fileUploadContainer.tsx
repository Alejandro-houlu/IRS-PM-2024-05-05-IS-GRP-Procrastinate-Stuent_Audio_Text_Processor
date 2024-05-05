import React from "react";
import {
  FileInput,
  SelectFileButton,
  FileName,
  DragDropArea,
  DragDropContainer,
  OptionButton,
  OptionsContainer,
  HeaderContainer,
  BackButton,
  Button,
  ParagraphContainer,
  ResultsButtonContainer,
} from "./style";
import {
  SELECTED_FILE,
  BTN_DRAG_AND_DROP,
  BTN_SELECT_FILE,
  BTN_DOWNLOAD_TRANSCRIPTION,
  BTN_MINDMAP,
  BTN_SUMMARY,
  BTN_BACK,
  TITLE_RESULT,
  BTN_VIEW_MINDMAP,
} from "./strings";
import { useFileUploadLogic } from "./fileUploadLogic";
import { BTN_DOWNLOAD, BTN_SUMMARIZE } from "../strings";

const FileUploadContainer: React.FC = () => {
  const {
    selectedFile,
    errorMessage,
    uploadSuccess,
    result,
    request,
    isAudioFile,
    handleFileChange,
    handleUpload,
    handleUploadButtonClick,
    handleFileDrop,
    downloadFileFromS3,
    handleLinkClick,
  } = useFileUploadLogic();

  return (
    <div>
      {!uploadSuccess && (
        <DragDropContainer>
          <DragDropArea
            onDragOver={(e: { preventDefault: () => any }) =>
              e.preventDefault()
            }
            onDrop={handleFileDrop}
          >
            {BTN_DRAG_AND_DROP}
          </DragDropArea>
          <FileInput
            type="file"
            id="fileInput"
            accept=".pdf,.doc,.docx,.mp4,.mp3,.wav,.m4a"
            onChange={handleFileChange}
          />
          <SelectFileButton
            htmlFor="fileInput"
            onClick={handleUploadButtonClick}
          >
            {BTN_SELECT_FILE}
          </SelectFileButton>
          {selectedFile && (
            <OptionsContainer>
              {isAudioFile(selectedFile.name) ? (
                <OptionButton
                  onClick={() => handleUpload(BTN_DOWNLOAD_TRANSCRIPTION)}
                >
                  {BTN_DOWNLOAD_TRANSCRIPTION}
                </OptionButton>
              ) : (
                <>
                  <OptionButton onClick={() => handleUpload(BTN_SUMMARY)}>
                    {BTN_SUMMARY}
                  </OptionButton>
                  <OptionButton onClick={() => handleUpload(BTN_MINDMAP)}>
                    {BTN_MINDMAP}
                  </OptionButton>
                </>
              )}
            </OptionsContainer>
          )}
        </DragDropContainer>
      )}
      {selectedFile && !uploadSuccess && (
        <FileName>
          {SELECTED_FILE}
          {selectedFile.name}
        </FileName>
      )}
      {errorMessage && !uploadSuccess && <div>{errorMessage}</div>}
      {uploadSuccess && (
        <>
          <BackButton onClick={handleUploadButtonClick}>{BTN_BACK}</BackButton>
          <HeaderContainer>{TITLE_RESULT}</HeaderContainer>
          {request == BTN_MINDMAP ? (
            <>
              <ResultsButtonContainer>
                <Button onClick={handleLinkClick}>{BTN_VIEW_MINDMAP}</Button>
              </ResultsButtonContainer>
            </>
          ) : (
            <>
              <ParagraphContainer>
                <p>{result.text}</p>
                <p>{result.summary}</p>
              </ParagraphContainer>
              {result.url && selectedFile && (
                <ResultsButtonContainer>
                  {result.uploadId && result.summary == "" && (
                    <Button onClick={() => handleUpload(BTN_SUMMARY)}>
                      {BTN_SUMMARIZE}
                    </Button>
                  )}
                  <Button
                    onClick={() => {
                      downloadFileFromS3(result.url, selectedFile?.name);
                    }}
                  >
                    {BTN_DOWNLOAD}
                  </Button>
                </ResultsButtonContainer>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default FileUploadContainer;
