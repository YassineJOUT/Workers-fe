import React from 'react'

interface IProps{
    touched?: boolean,
    message?: string
}

 export const Error: React.FunctionComponent<IProps> = ({touched, message}) => {
    if(touched === true ){
        if(message){
     return <div className="msg-error">{message}</div>;
    }
    }
    return <div>&nbsp;</div>;

}
