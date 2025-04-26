import CryptoJS from 'crypto-js';

const encryptKey = import.meta.env.VITE_ENCRYPT_KEY;

export const handleEncrypt = (input: string) => {
  if (typeof encryptKey !== 'string') {
    throw new Error('Encryption key is not defined or not a string');
  }

  return CryptoJS.AES.encrypt(input, encryptKey).toString();
};

export const handleDecrypt = (encryptedData?: string) => {
  if (!encryptedData) {
    return '';
  }

  if (typeof encryptKey !== 'string') {
    throw new Error('Encryption key is not defined or not a string');
  }

  const bytes = CryptoJS.AES.decrypt(encryptedData, encryptKey);

  return bytes.toString(CryptoJS.enc.Utf8);
};
