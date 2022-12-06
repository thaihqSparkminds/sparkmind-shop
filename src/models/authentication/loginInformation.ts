export interface LoginInformation {
  email: string;
  password: string;
  countryCode?: string;
  languageCode?: string;
  twoFaCode?: string;
  destroySession?: boolean;
}
