export interface AuthInformation {
  email: string;
  password: string;
  countryCode?: string;
  languageCode?: string;
  twoFaCode?: string;
  destroySession?: boolean;
}
