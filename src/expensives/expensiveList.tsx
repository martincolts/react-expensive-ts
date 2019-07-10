import * as React from 'react';
import { connect } from 'react-redux';
import store from 'src/store/store';
import Expensive from './expensive';
import ExpensiveService from './expensiveService';
import ExpensiveTBody from './expensiveTBody';

interface IExpensiveListState {
    expensives: Expensive[];
}

class ExpensiveList extends React.Component<any, IExpensiveListState> {
    private expensiveService: ExpensiveService;

    constructor(props: any) {
        super(props);

        this.expensiveService = new ExpensiveService();

        this.state={
            expensives: []
        }

        store.subscribe(() => {
            this.setState({
                expensives: store.getState().expensives
            });
        })
    }

    public async componentDidMount() {
        this.expensiveService.getAllExpensives()
    }

    public componentDidUpdate() {
        store.subscribe(() => { this.setState({expensives: store.getState().expensives})})
    }

    public render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Fecha</th>
                        <th>Precio</th>
                        <th>Categoria</th>
                    </tr>
                </thead>
                <ExpensiveTBody/>
            </table>
        )
    }

}

export default connect()(ExpensiveList)