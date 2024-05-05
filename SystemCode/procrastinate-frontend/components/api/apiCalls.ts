import { getUserData } from "../Authentication/authenticationUtils";
import {
  FILE_UPLOAD_ERROR,
  FILE_UPLOAD_FAILED,
  SIGN_IN_ERROR,
  SIGN_IN_FAILED,
  SIGN_UP_ERROR,
} from "../strings";
import { SignUpFormData } from "./interfaces";
import {
  CreateSummaryRequestBody,
  SpeechToTextRequestBody,
  SignInRequestBody,
  CreateMindmapRequestBody,
} from "./requestBody";
import { getAPI, ENDPOINTS, HTTP_METHODS } from "./requestUrl";
import {
  CreateSummaryResponse,
  SpeechToTextResponse,
  SignInResponse,
  SignUpResponse,
  CreateMindMapResponse,
} from "./responses";

const getAuthHeaders = (token: string) => {
  return {
    Authorization: "Bearer " + token,
  };
};

export const isSignedin = async (): Promise<boolean> => {
  try {
    await getUserData();
    return true;
  } catch (error) {
    return false;
  }
};

const objectToFormData = (requestBody: Record<string, any>): FormData => {
  const formData = new FormData();
  for (const [key, value] of Object.entries(requestBody)) {
    value instanceof File
      ? formData.append(key, value)
      : formData.append(key, value.toString());
  }
  return formData;
};

export const signUpAPI = async (
  requestBody: SignUpFormData,
): Promise<SignUpResponse> => {
  const formData = objectToFormData(requestBody);
  try {
    const response = await fetch(getAPI(ENDPOINTS.SIGN_UP), {
      method: HTTP_METHODS.POST,
      body: formData,
    });
    if (response.ok) {
      const responseData: SignUpResponse = await response.json();
      return responseData;
    } else {
      throw new Error(SIGN_UP_ERROR + response.statusText);
    }
  } catch (error) {
    throw new Error(SIGN_UP_ERROR + error);
  }
};

export const signInAPI = async (
  requestBody: SignInRequestBody,
): Promise<SignInResponse> => {
  const formData: FormData = objectToFormData(requestBody);
  try {
    const response = await fetch(getAPI(ENDPOINTS.SIGN_IN), {
      method: HTTP_METHODS.POST,
      body: formData,
    });

    if (response.ok) {
      const responseData: SignInResponse = await response.json();
      return responseData;
    } else {
      throw new Error(SIGN_IN_ERROR + response.statusText);
    }
  } catch (error) {
    throw new Error(SIGN_IN_FAILED + error);
  }
};

export const speechToTextAPI = async (
  requestBody: SpeechToTextRequestBody,
): Promise<SpeechToTextResponse> => {
  try {
    const user = await getUserData();
    if (!user) {
      throw new Error("User data not available");
    }

    requestBody.email = user.email;
    requestBody.username = user.username;
    const formData = objectToFormData(requestBody);

    const response = await fetch(getAPI(ENDPOINTS.FILE_UPLOAD), {
      method: HTTP_METHODS.POST,
      body: formData,
      headers: await getAuthHeaders(user.token),
    });

    if (response.ok) {
      const responseData: SpeechToTextResponse = await response.json();
      return responseData;
    } else {
      throw new Error(FILE_UPLOAD_FAILED + response.statusText);
    }
  } catch (error) {
    throw new Error(FILE_UPLOAD_ERROR + error);
  }
};

export const createSummaryAPI = async (
  requestBody: CreateSummaryRequestBody,
): Promise<CreateSummaryResponse> => {
  try {
    const user = await getUserData();
    if (!user) {
      throw new Error("User data not available");
    }
    requestBody.email = user.email;
    requestBody.username = user.username;
    const formData = objectToFormData(requestBody);
    const response = await fetch(getAPI(ENDPOINTS.CREATE_SUMMARY), {
      method: HTTP_METHODS.POST,
      body: formData,
      headers: getAuthHeaders(user.token),
    });

    if (response.ok) {
      const responseData: CreateSummaryResponse = await response.json();
      return responseData;
    } else {
      throw new Error(FILE_UPLOAD_FAILED + response.statusText);
    }
  } catch (error) {
    throw new Error(FILE_UPLOAD_ERROR + error);
  }
};

export const createMindMapAPI = async (
  requestBody: CreateMindmapRequestBody,
): Promise<CreateMindMapResponse> => {
  const user = await getUserData();
  if (!user) {
    throw new Error("User data not available");
  }
  requestBody.username = user.username;
  const formData = objectToFormData(requestBody);
  try {
    const response = await fetch(getAPI(ENDPOINTS.CREATE_MINDMAP), {
      method: HTTP_METHODS.POST,
      body: formData,
      headers: getAuthHeaders(user.token),
    });

    if (response.ok) {
      const responseData: CreateSummaryResponse = await response.json();
      return responseData;
    } else {
      throw new Error(FILE_UPLOAD_FAILED + response.statusText);
    }
  } catch (error) {
    throw new Error(FILE_UPLOAD_ERROR + error);
  }
};
