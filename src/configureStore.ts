import { Store, createStore, applyMiddleware } from "redux";
import { ApplicationState, RootReducer } from "./store";
import { History } from 'history';
import thunk from 'redux-thunk';

export const configureStore = (history: History): Store<ApplicationState> => {
    let initialState: ApplicationState = {
        user: {
            details: {
                username : '',
                email : '',
                password : '',
            },
            connected: false,
            error: ''
        }
    };

    const middlewares = [thunk];
    const store =  createStore(
        RootReducer(history),
        initialState,
        applyMiddleware(...middlewares)
    );


    return store;
}