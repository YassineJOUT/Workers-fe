import { userDetailsState } from "./types";
import { combineReducers } from "redux";
import { LoginReducer,PasswordChangereducer,
    PasswordResetreducer,SignupReducer } from "./reducer";


export interface ApplicationState {
    user: userDetailsState,
}

export const RootReducer = () => combineReducers({
    login: LoginReducer,
    changePassword: PasswordChangereducer,
    resetPassword: PasswordResetreducer,
    signUp: SignupReducer,
});