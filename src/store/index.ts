import { userDetailsState } from "./types";
import { combineReducers } from "redux";
import { PasswordChangereducer} from "./PasswordRedifinition/reducer";
import { LoginReducer } from "./Login/reducer";
import { SignupReducer } from "./Registration/reducer";
import { connectRouter } from "connected-react-router";
import { History } from "history";


export interface ApplicationState {
    user: userDetailsState,
}

export const RootReducer = (history: History) => combineReducers({
    login: LoginReducer ,
    changePassword: PasswordChangereducer,
    signUp: SignupReducer,
    router: connectRouter(history),
});