import {
    CHANGE_USER_DATA_FORM_SUBMIT, CHANGE_USER_DATA_FORM_SUBMIT_FAILED, CHANGE_USER_DATA_FORM_SUBMIT_SUCCESS,
    FORGOT_PASSWORD_FORM_SET_VALUE,
    FORGOT_PASSWORD_FORM_SUBMIT,
    FORGOT_PASSWORD_FORM_SUBMIT_FAILED,
    FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS,
    RESET_PASSWORD_FORM_SET_VALUE,
    RESET_PASSWORD_FORM_SUBMIT, RESET_PASSWORD_FORM_SUBMIT_FAILED,
    RESET_PASSWORD_FORM_SUBMIT_SUCCESS,
    USER_ACCESS_ALLOWED,
    USER_ACCESS_DENIED,
    USER_LOGIN_FORM_SET_VALUE,
    USER_LOGIN_FORM_SUBMIT,
    USER_LOGIN_FORM_SUBMIT_FAILED,
    USER_LOGIN_FORM_SUBMIT_SUCCESS,
    USER_REGISTER_FORM_SET_VALUE,
    USER_REGISTER_FORM_SUBMIT,
    USER_REGISTER_FORM_SUBMIT_FAILED,
    USER_REGISTER_FORM_SUBMIT_SUCCESS
} from "../actions/userAction";
import {IUser} from "./User.type";
import {ILoginUserRequest} from "./LoginUserRequest.type";
import {IRegisterUserRequest} from "./RegisterUserRequest.type";
import {IResetPasswordRequest} from "./ResetPasswordRequest.type";

export interface IUserInitialState {
    registerForm: IRegisterUserRequest;
    loginForm: ILoginUserRequest;
    user: IUser;
    forgotPasswordForm: {
        email: string;
    };
    resetPasswordForm: IResetPasswordRequest;
    isAuth: undefined | boolean;
    registrationSubmit: boolean;
    registrationFailed: boolean;
    loginSubmit: boolean;
    loginFailed: boolean;
    forgotPasswordSubmit: boolean;
    forgotPasswordFailed: boolean;
    resetEmailSent: boolean;
    resetPasswordSubmit: boolean;
    resetPasswordFailed: boolean;
    changeUserDataSubmit: boolean;
    changeUserDataFailed: boolean;
}

export type TUserActions =
    | ISetRegisterFormValue
    | IUserRegisterFormSubmit
    | IUserRegisterFormSubmitSuccess
    | IUserRegisterFormSubmitFailed
    | ISetLoginFormValue
    | IUserLoginFormSubmit
    | IUserLoginFormSubmitSuccess
    | IUserLoginFormSubmitFailed
    | IUserAccessDenied
    | IUserAccessAllowed
    | ISetForgotPasswordFormValue
    | IForgotPasswordFormSubmit
    | IForgotPasswordFormSubmitSuccess
    | IForgotPasswordFormSubmitFailed
    | ISetResetPasswordFormValue
    | IResetPasswordFormSubmit
    | IResetPasswordFormSubmitSuccess
    | IResetPasswordFormSubmitFailed
    | IChangeUserDataFormSubmit
    | IChangeUserDataFormSubmitSuccess
    | IChangeUserDataFormSubmitFailed;

export interface ISetRegisterFormValue {
    readonly type: typeof USER_REGISTER_FORM_SET_VALUE;
    readonly field: string;
    readonly value: string;
}

export interface IUserAccessDenied {
    readonly type: typeof USER_ACCESS_DENIED;
}

export interface IUserLoginFormSubmitFailed {
    readonly type: typeof USER_LOGIN_FORM_SUBMIT_FAILED;
}

export interface IUserLoginFormSubmitSuccess {
    readonly type: typeof USER_LOGIN_FORM_SUBMIT_SUCCESS;
    readonly payload: IUser;
}

export interface IUserLoginFormSubmit {
    readonly type: typeof USER_LOGIN_FORM_SUBMIT;
}

export interface ISetLoginFormValue {
    readonly type: typeof USER_LOGIN_FORM_SET_VALUE;
    readonly field: string;
    readonly value: string;
}

export interface IUserRegisterFormSubmitFailed {
    readonly type: typeof USER_REGISTER_FORM_SUBMIT_FAILED;
}

export interface IUserRegisterFormSubmitSuccess {
    readonly type: typeof USER_REGISTER_FORM_SUBMIT_SUCCESS;
}

export interface IUserRegisterFormSubmit {
    readonly type: typeof USER_REGISTER_FORM_SUBMIT;
}

export interface IUserAccessAllowed {
    readonly type: typeof USER_ACCESS_ALLOWED;
    readonly payload: IUser;
}

export interface ISetForgotPasswordFormValue {
    readonly type: typeof FORGOT_PASSWORD_FORM_SET_VALUE;
    readonly field: string;
    readonly value: string;
}

export interface IForgotPasswordFormSubmit {
    readonly type: typeof FORGOT_PASSWORD_FORM_SUBMIT;
}

export interface IForgotPasswordFormSubmitSuccess {
    readonly type: typeof FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS;
}

export interface IForgotPasswordFormSubmitFailed {
    readonly type: typeof FORGOT_PASSWORD_FORM_SUBMIT_FAILED;
}

export interface ISetResetPasswordFormValue {
    readonly type: typeof RESET_PASSWORD_FORM_SET_VALUE;
    readonly field: string;
    readonly value: string;
}

export interface IResetPasswordFormSubmit {
    readonly type: typeof RESET_PASSWORD_FORM_SUBMIT;
}

export interface IResetPasswordFormSubmitSuccess {
    readonly type: typeof RESET_PASSWORD_FORM_SUBMIT_SUCCESS;
}

export interface IResetPasswordFormSubmitFailed {
    readonly type: typeof RESET_PASSWORD_FORM_SUBMIT_FAILED;
}

export interface IChangeUserDataFormSubmit {
    readonly type: typeof CHANGE_USER_DATA_FORM_SUBMIT;
}

export interface IChangeUserDataFormSubmitSuccess {
    readonly type: typeof CHANGE_USER_DATA_FORM_SUBMIT_SUCCESS;
    readonly payload: IUser;
}

export interface IChangeUserDataFormSubmitFailed {
    readonly type: typeof CHANGE_USER_DATA_FORM_SUBMIT_FAILED;
}