export interface IUserLogin {
  username: string;
  password: string;
}

export interface IUserRegister {
  displayName: string;
  username: string;
  password: string;
}

export interface IUser {
  displayName: string;
  username: string;
  password: string;
}

export interface ICategory {
  id?: number;
  name: string;
}

export interface IProduct {
  id?: number;
  name: string;
  description: string;
  price: number;
  category: ICategory;
  imageName?: string;
  contentType?: string;
}

export interface AuthenticationResponse {
  token: string;
  user: AuthenticatedUser;
}

export interface AuthenticatedUser {
  displayName: string;
  username: string;
  authorities: Authorities[];
}

export interface Authorities {
  authority: string;
}

export interface IResponse {
  status?: number;
  success?: boolean;
  message?: string;
  data?: object
}