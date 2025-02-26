export const tryCatch = <T>(callback: () => T, defaultValue: T): T => {
  try {
    return callback();
  } catch (e) {
    return defaultValue;
  }
};
