import * as React from 'react';
import Expensive from './expensive';

interface IExpensiveRowProps extends React.Props<any> {
    expensive: Expensive;
}

export default class ExpensiveRow extends React.Component<IExpensiveRowProps, any> {

    public render() {
        return (
            <tr>
                <td>{this.props.expensive.id}</td>
                <td>{this.props.expensive.name}</td>
                <td>{this.props.expensive.description}</td>
                <td>{this.props.expensive.created}</td>
                <td>{this.props.expensive.price}</td>
                <td>{this.props.expensive.categoryDTO.name}</td>
            </tr>
        )
    }
}