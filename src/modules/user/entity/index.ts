//#region LOGIN
export interface LoginFormValues {
  email: string;
  secretKey: string;
  password: string;
}

export interface LoginResponse {
  expires: string;
  jwt: string;
  message: string;
  rollOver: boolean;
}

//#endregion
//#region USER

export enum USERGENDER {
  MALE = "M",
  FEMALE = "F"
}

export interface UserPhoneNumber {
  number: number;
  ext: string;
}

export interface UserEmail {
  address: string;
}

export interface User {
  gender: USERGENDER;
  phoneNumbers: UserPhoneNumber[];
  email: UserEmail;
  name: string;
}
//#endregion
//#region SEARCH USER
export interface SearchFormValues {
  name: string;
  email: string;
  birthDate: string;
  gender?: USERGENDER;
  phoneNumber: string;
  phoneNumberExt: string;
}
export interface SearchUserResponse {
  users: User[];
}
//#endregion

//#region REGEX

export const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//#endregion
