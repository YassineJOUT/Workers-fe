
export const LoadState = () => {
    try {
        
        const serializedState = localStorage.getItem('store');
        if(serializedState === null) return undefined;
        return JSON.parse(serializedState);
    }
    catch(err ){
        return undefined;
    }
}

export const SaveState = (state: any) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('store',serializedState);
    }
    catch(err ){
        // ignore error
    }
}