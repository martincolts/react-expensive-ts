import * as React from 'react';

interface ILoginState {
    name: string;
    pass: string
}

export default class Login extends React.Component<any, ILoginState> {
    
    constructor(props: any) {
        super(props);

        this.state={
            name: "",
            pass: ""
        }
    }
    
    public render() {
        return (
            <div>
                <input placeholder="username"/>
                <input placeholder="password" type="password"/>
                <button>Login</button> 
            </div>
        )
    }
}