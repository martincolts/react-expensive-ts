import * as React from 'react';
import Expensive from './expensive';

interface IExpensiveRowProps extends React.Props<any> {
    expensive: Expensive;
}

export default class ExpensiveRow extends React.Component<IExpensiveRowProps, any> {

    constructor(props: IExpensiveRowProps){
        super(props);

        this.state={
            expensive: this.props.expensive
        }
    }

    public render() {
        // tslint:disable-next-line:no-console
        console.log(this.state);
        return (
            <tr>
                <td>{this.state.expensive.id}</td>
                <td>{this.state.expensive.name}</td>
                <td>{this.state.expensive.description}</td>
                <td>{this.state.expensive.created}</td>
                <td>{this.state.expensive.price}</td>
                <td>{this.state.expensive.categoryDTO.name}</td>
            </tr>
        )
    }
}