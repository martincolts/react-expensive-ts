import * as React from 'react';
import Expensive from './expensive';
import ExpensiveRow from './expensiveRow';

interface IExpensiveTBodyProps extends React.Props<any> {
    expensives: Expensive[];
}

export default class ExpensiveTBody extends React.Component<IExpensiveTBodyProps, any> {
    public render (){
        return <tbody>
         {
             this.props.expensives.map((expensive: Expensive) => {
                return <ExpensiveRow key={expensive.id} expensive={expensive}/>
            })
        }
        </tbody>
    }
}