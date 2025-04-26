import Cookies from 'js-cookie';
import { USER_THEME_KEY, COOKIE_EXPIRE_DAY, OLD_USER_KEY, USER_LOCALE_KEY,  } from '../../constants/cookies';
import { handleDecrypt, handleEncrypt } from '../encrypt';

class CacheHandler {
  static write(key: string, value: string, options: Cookies.CookieAttributes = {}): void {
    Cookies.set(key, handleEncrypt(value), { ...options, expires: COOKIE_EXPIRE_DAY });
  }

  static read(key: string): string {
    return handleDecrypt(Cookies.get(key));
  }

  static remove(key: string): void {
    Cookies.remove(key);
  }

  static clear(): void {
    console.log('out');
    const neededAttributes = [OLD_USER_KEY, USER_THEME_KEY, USER_LOCALE_KEY];

    Object.keys(Cookies.get()).forEach(function (cookieName) {
      if (!neededAttributes.includes(cookieName)) {
        Cookies.remove(cookieName);
      }
    });
  }
}

export default CacheHandler;
