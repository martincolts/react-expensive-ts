import * as React from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <Link to="/home/expensives/create">Create</Link>
                <Link to="/home/expensives/list">List</Link>
            </div>
        )
    }
}