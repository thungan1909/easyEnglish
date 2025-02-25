import CryptoJS from "crypto-js";

export const handleEncrypt = (input: string) => {
  return CryptoJS.AES.encrypt(
    input,
    import.meta.env.VITE_ENCRYPT_KEY
  ).toString();
};

export const handleDecrypt = (encryptedData?: string) => {
  if (!encryptedData) {
    return "";
  }

  const bytes = CryptoJS.AES.decrypt(
    encryptedData,
    import.meta.env.VITE_ENCRYPT_KEY
  );
  return bytes.toString(CryptoJS.enc.Utf8);
};
