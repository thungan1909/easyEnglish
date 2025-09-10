import CacheHandler from ".";


export const setUserCacheAttribute = (key: string, att: string) => {
  CacheHandler.write(key, att);
};

export const getUserCacheAttribute = (key: string): string => {
  const response = CacheHandler.read(key);

  if (!response) {
    return '';
  }

  return response;
};

export const removeUserCacheAttribute = (key: string): void => {
  CacheHandler.remove(key);
};
