import React from "react";
import {
  FileInput,
  SelectFileButton,
  DragDropArea,
  DragDropContainer,
  OptionButton,
  OptionsContainer,
  BackButton,
} from "./style";
import {
  BTN_DRAG_AND_DROP,
  BTN_SELECT_FILE,
  BTN_DOWNLOAD_TRANSCRIPTION,
  BTN_MINDMAP,
  BTN_SUMMARY,
} from "./strings";
import { useFileUploadLogic } from "./fileUploadLogic";

interface FileUploadFormProps {
  selectedFile: File | null;
  handleFileDrop: () => void;
  handleFileChange: () => void;
  handleUploadButtonClick: () => void;
  handleUpload: (request: string) => void;
}

const FileUploadForm: React.FC<FileUploadFormProps> = ({
  selectedFile,
  handleFileDrop,
  handleFileChange,
  handleUploadButtonClick,
  handleUpload,
}) => {
  const { isAudioFile } = useFileUploadLogic();

  return (
    <DragDropContainer>
      <DragDropArea
        onDragOver={(e: { preventDefault: () => any }) => e.preventDefault()}
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
      <SelectFileButton htmlFor="fileInput" onClick={handleUploadButtonClick}>
        {BTN_SELECT_FILE}
      </SelectFileButton>
      <OptionsContainer>
        {selectedFile && isAudioFile(selectedFile.name) ? (
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
    </DragDropContainer>
  );
};

export default FileUploadForm;
