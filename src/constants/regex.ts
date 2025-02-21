export const userIdRegex: RegExp =
  /^(?=.*[0-9])(?=.*[a-z])(?!.*[^a-z0-9]).{6,16}$/;
export const passwordRegex: RegExp =
  /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$_])[a-z0-9!@#$_]{8,20}$/;
export const emailPrefixRegex: RegExp = /^[A-Za-z0-9]+(?:[._-][A-Za-z0-9]+)*$/; //TODO: Update later with new regex
export const emailSuffixRegex = /^[\da-z.-]+\.[a-z]{2,6}$/; //TODO: Add the regex for emailSuffix when choosing "Direct Input"
export const businessNumberPrefixRegex: RegExp = /^\d{3}$/;
export const businessNumberMiddleRegex: RegExp = /^\d{2}$/;
export const businessNumberSuffixRegex: RegExp = /^\d{5}$/;
export const cellPhoneNumberPrefixRegex: RegExp = /^01(0|1|6|7|8|9)/;
export const phoneNumberPrefixRegex: RegExp =
  /^(02|051|053|032|062|042|052|044|031|033|043|041|063|061|054|055|064|070|050)$/;

export const phoneNumberMiddleRegex: RegExp = /^[0-9]{3,4}$/;
export const phoneNumberSuffixRegex: RegExp = /^[0-9]{4}$/;
export const onlyNumbersRegex: RegExp = /^[0-9]+(?:\.[0-9]+)?$/;
export const feeRegex = /^(?:\d{1,3}(?:,\d{3})*|\d+)$/;
export const searchInputPattern = /^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣\s]+$/;
export const numberCommaRegex = /\B(?=(\d{3})+(?!\d))/g;
export const commonCodeIDRegex = /^[a-zA-Z0-9_]{1,35}$/;
export const commonCodeNameRegex = /^[가-힣a-zA-Z0-9 ]{1,20}$/;
export const nameRegex = /^[가-힣a-zA-Z0-9 ]{1,20}$/;
export const bankAccountHolderNameRegex = /^[가-힣a-zA-Z0-9 ]{0,20}$/;
export const bankAccountNumberRegex = /^[\d-]{0,20}$/; // TODO: Update later with new regex
export const authenticationEmailNumberRegex = /^\d{6}$/; // TODO: Update later with new regex
export const notNumberRegex = /\D/g;
export const representativeNameRegex = /^[가-힣a-zA-Z0-9 ]{0,20}$/;
export const corporationRegistrationNumberRegex = /^[0-9]{0,20}$/; //TODO: Update later with new regex
export const businessBasicAddressRegex = /^.{0,50}$/; //TODO: Update later with new regex
export const businessDetailAddressRegex = /^.{0,50}$/; //TODO: Update later with new regex
export const businessAddressZipCodeRegex = /^.{0,50}$/; //TODO: Update later with new regex
export const screenNameRegex = /^[가-힣a-zA-Z0-9 ]{1,20}$/;
export const extendInfoDetailCodeNameRegex = /^[가-힣a-zA-Z0-9 ]{1,20}$/;
export const extendInfoDisplayNameRegex = /^[가-힣a-zA-Z0-9 ]{0,20}$/;
export const upTo20CharactersRegex = /^.{0,20}$/;
export const searchBoxRegex = /^[가-힣a-zA-z0-9 ]{0,50}$/;
