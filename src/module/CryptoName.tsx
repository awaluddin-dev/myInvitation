import CryptoJS from "crypto-js";

const SECRET_KEY = "ourlove2019";

// Custom encoding strategy to replace '/' with '_'
const customBase64Encode = (text) => {
  return btoa(text).replace(/\//g, "_");
};

// Custom decoding strategy to replace '_' with '/'
const customBase64Decode = (text) => {
  return atob(text.replace(/_/g, "/"));
};

// Encrypt a string
export const encryptString = (text) => {
  const ciphertext = CryptoJS.AES.encrypt(text, SECRET_KEY).toString();
  const encodedCiphertext = customBase64Encode(ciphertext);
  return encodedCiphertext;
};

// Decrypt a string
export const decryptString = (encodedCiphertext) => {
  const decodedCiphertext = customBase64Decode(encodedCiphertext);
  const bytes = CryptoJS.AES.decrypt(decodedCiphertext, SECRET_KEY);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};
