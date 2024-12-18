
export interface IUserSignUp {
    displayName: string;
    username: string;
    password: string;
    passwordRepeat: string;
}

export interface IUserLogin {
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
}