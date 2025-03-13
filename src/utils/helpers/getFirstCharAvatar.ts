export const getFirstCharAvatar = (username?: string) => {
  return username ? username.charAt(0).toUpperCase() : "?";
};
