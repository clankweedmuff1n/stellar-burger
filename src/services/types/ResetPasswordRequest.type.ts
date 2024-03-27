export interface IResetPasswordRequest {
    readonly password: string;
    readonly token: string;
}