import { loginState, registerState, PasswordForgottenState, PasswordResetState } from "./types";
import { combineReducers } from "redux";
import { LoginReducer } from "./Login/reducer";
import { PasswordForgottenReducer } from "./PasswordForgotten/reducer";
import { SignupReducer } from "./Registration/reducer";
import { resetPasswordReducer } from "./ResetPassword/reducer";
import { connectRouter } from "connected-react-router";
import { History } from "history";


export interface ApplicationState {
    login: loginState,
    register: registerState,
    passwordForgotten: PasswordForgottenState,
    resetPassword: PasswordResetState
}

export const RootReducer = (history: History) => combineReducers({
    login: LoginReducer,
    register: SignupReducer,
    passwordForgotten: PasswordForgottenReducer,
    resetPassword: resetPasswordReducer,
    router: connectRouter(history),
});