export const BASE_URL = "https://df02-116-15-175-85.ngrok-free.app";

export const ENDPOINTS = {
  SIGN_UP: "SIGN_UP",
  FILE_UPLOAD: "FILE_UPLOAD",
  SIGN_IN: "SIGN_IN",
  CREATE_SUMMARY: "CREATE_SUMMARY",
  CREATE_MINDMAP: "CREATE_MINDMAP",
} as const;

const ENDPOINT_PATHS = {
  [ENDPOINTS.SIGN_UP]: "auth/signup",
  [ENDPOINTS.FILE_UPLOAD]: "speechToText",
  [ENDPOINTS.SIGN_IN]: "auth/signin",
  [ENDPOINTS.CREATE_SUMMARY]: "createSummary",
  [ENDPOINTS.CREATE_MINDMAP]: "createMindmap", 
};

export const HTTP_METHODS = {
  POST: "POST",
  GET: "GET",
};

export const getAPI = (feature: keyof typeof ENDPOINT_PATHS): string => {
  return `${BASE_URL}/api/${ENDPOINT_PATHS[feature]}`;
};
