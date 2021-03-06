export enum UserAuthorization {
    admin = "administrator",
    user = "user",
}

export interface ICreateOrLoginUser {
    email: string;
    password: string;
} 

export interface IAddUserToOrganization {
    uid: string;
    role: UserAuthorization
}
