import * as React from 'react';
import { connect } from 'react-redux';
import Expensive from './expensive';
import ExpensiveRow from './expensiveRow';

interface IExpensiveTBodyProps {
    expensives: Expensive[];
}

function ExpensiveTBody (props: IExpensiveTBodyProps) {
    return <tbody>
    {
        props.expensives.map((expensive: Expensive) => {
            return <ExpensiveRow key={expensive.id} expensive={expensive}/>
        })
    }
    </tbody>
}


function mapStateToProps(state: any){
    return {
        expensives : state.expensives
    }
}

export default connect(mapStateToProps)(ExpensiveTBody)