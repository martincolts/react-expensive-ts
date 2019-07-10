import * as React from 'react';
import { Route, Switch } from 'react-router';
import ExpensiveForm from 'src/expensives/expensiveForm';
import ExpensiveList from 'src/expensives/expensiveList';
import NavBar from './navBar';

export default class Home extends React.Component<any, any>{
    public render() {
        return (
            <div>
                <NavBar/>
                <Switch>
                    <Route path="/home/expensives/list" component={ExpensiveList}/>
                    <Route path="/home/expensives/create" component={ExpensiveForm}/>
                </Switch>
            </div>
        )
    }
}