const allowedFileTypes = [
  ".pdf",
  ".doc",
  ".docx",
  ".mp4",
  ".mp3",
  ".wav",
  ".m4a",
  ".txt",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // MIME types
  "audio/mpeg",
  "audio/wav",
  "audio/x-m4a",
] as const;

export type AllowedFileType = (typeof allowedFileTypes)[number];
export const allFileTypes: AllowedFileType[] = [...allowedFileTypes];

export type APIResult = {
  text: string;
  summary: string;
  url: string;
  uploadId: string;
};
export const emptyResult: APIResult = {
  text: "",
  summary: "",
  url: "",
  uploadId: "",
};
