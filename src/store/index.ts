import { loginState, registerState } from "./types";
import { combineReducers } from "redux";
import { LoginReducer } from "./Login/reducer";
import { SignupReducer } from "./Registration/reducer";
import { connectRouter } from "connected-react-router";
import { History } from "history";


export interface ApplicationState {
    login: loginState,
    register: registerState
}

export const RootReducer = (history: History) => combineReducers({
    login: LoginReducer,
    register: SignupReducer,
    router: connectRouter(history),
});