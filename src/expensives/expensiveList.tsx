import * as React from 'react';
import store from 'src/store/store';
import Expensive from './expensive';
import ExpensiveService from './expensiveService';
import ExpensiveTBody from './expensiveTBody';

interface IExpensiveListState {
    expensives: Expensive[];
}

export default class ExpensiveList extends React.Component<any, IExpensiveListState> {
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

    public componentDidMount() {
        this.expensiveService.getAllExpensives();
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
                <ExpensiveTBody expensives={this.state.expensives}/>
            </table>
        )
    }

}