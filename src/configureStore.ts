import { Store, createStore, applyMiddleware } from "redux";
import { ApplicationState, RootReducer } from "./store";
import { History } from 'history';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { LoginActionsType } from "./store/Login/types";
import { composeWithDevTools } from 'redux-devtools-extension';
import { LoadState,SaveState } from './utilities/localStorage';

export const configureStore = (history: History): Store<ApplicationState> => {
    let initialState: ApplicationState = {
        user: {
            connected: false,
            user: {
                email: '',
                password: '',
                username: ''
            }
        }
    };
    let savedState = LoadState();
    if(savedState === undefined ) savedState = initialState;
    const store =  createStore(
        RootReducer(history),
        savedState,composeWithDevTools(
        applyMiddleware(thunk as ThunkMiddleware<ApplicationState,LoginActionsType>)),
        
    );

    store.subscribe(() => {
        SaveState(store.getState());
    });


    return store;
}