export type SpeechToTextResponse = {
  result: string;
  fileUrl: string;
  username: string;
  uploadId: string;
};

export type SignUpResponse = {
  status: string;
};

export type SignInResponse = {
  token: string;
  type: string;
  id: number;
  username: string;
  roles: string[];
  email: string;
};

export type CreateSummaryResponse = {
  result: string;
  result_url: string;
  username: string;
  uploadId: string;
  topics: string;
};

export type CreateMindMapResponse = {
  result_url: string;
  username: string;
  uploadId: string;
};
