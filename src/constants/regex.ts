export const wordSplitterRegex: RegExp = /(\s+|[.,!?])/;
export const punctuationRegex: RegExp = /[.,!?]/;
export const exactPunctuationRegex: RegExp = /^[.,!?]$/;
export const emailRegex: RegExp =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
