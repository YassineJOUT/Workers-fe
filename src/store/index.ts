import { userDetailsState } from "./PasswordRedifinition/types";
import { combineReducers } from "redux";
import { PasswordChangereducer} from "./PasswordRedifinition/reducer";
import { LoginReducer } from "./Login/reducer";
import { SignupReducer } from "./Registration/reducer";


export interface ApplicationState {
    user: userDetailsState,
}

export const RootReducer = () => combineReducers({
    login: LoginReducer,
    changePassword: PasswordChangereducer,
    signUp: SignupReducer,
});