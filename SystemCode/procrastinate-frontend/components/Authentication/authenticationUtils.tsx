import {
  ERROR_MSG_GET_USER,
  ERROR_MSG_LOGOUT,
  KEY_ENCRYPTED_EMAIL,
  KEY_ENCRYPTED_USERNAME,
  KEY_TOKEN,
  SUCCESS_MSG_LOGOUT,
} from "./strings";

// Function to encrypt a string using Base64 encoding
function encryptString(data: string): string {
  return btoa(data);
}

// Function to decrypt a string using Base64 decoding
function decryptString(data: string): string {
  return atob(data);
}

// Function to save username, email, and authentication token securely
export async function saveUserData(
  username: string,
  email: string,
  token: string,
) {
  try {
    // Encrypt username and email
    const encryptedUsername = encryptString(username);
    const encryptedEmail = encryptString(email);

    // Store encrypted data in localStorage
    localStorage.setItem(KEY_ENCRYPTED_USERNAME, encryptedUsername);
    localStorage.setItem(KEY_ENCRYPTED_EMAIL, encryptedEmail);
    localStorage.setItem(KEY_TOKEN, token); // Store token without encryption
  } catch (error) {
    console.error(ERROR_MSG_GET_USER, error);
  }
}

// Function to retrieve username, email, and authentication token securely
export async function getUserData(): Promise<{
  username: string;
  email: string;
  token: string;
} | null> {
  try {
    // Retrieve encrypted data from localStorage
    const encryptedUsername = localStorage.getItem(KEY_ENCRYPTED_USERNAME);
    const encryptedEmail = localStorage.getItem(KEY_ENCRYPTED_EMAIL);
    const token = localStorage.getItem(KEY_TOKEN);

    if (!encryptedUsername || !encryptedEmail || !token) {
      return null;
    }

    // Decrypt username and email
    const username = decryptString(encryptedUsername);
    const email = decryptString(encryptedEmail);

    return { username, email, token };
  } catch (error) {
    console.error(ERROR_MSG_GET_USER, error);
    return null;
  }
}

// Function to log out and clear user data
export async function logout() {
  try {
    // Remove user data from localStorage
    localStorage.removeItem(KEY_ENCRYPTED_USERNAME);
    localStorage.removeItem(KEY_ENCRYPTED_EMAIL);
    localStorage.removeItem(KEY_TOKEN);
    console.log(SUCCESS_MSG_LOGOUT);
  } catch (error) {
    console.error(ERROR_MSG_LOGOUT, error);
  }
}
