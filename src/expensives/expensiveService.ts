import axios from 'axios';
import { addExpensive, addExpensives } from 'src/actions';
import store from '../store/store';
import Expensive from './expensive';

const url: string = "http://localhost:3000/expensives";

export default class ExpensiveService {
    
    public async getAllExpensives(): Promise<Expensive[]> {
        if (store.getState().expensives.length === 0) {
            const data = await axios.get(url);
            const expensives: Expensive[] = data.data.map((expensive: any) => this.populateExpensive(expensive));
            store.dispatch(addExpensives(expensives));
        }
        return store.getState().expensives;
    }

    public async saveExpensive(expensive: Expensive): Promise<Expensive> {
        const data = await axios.post(url, expensive);
        const expensiveSaved: Expensive = data.data;
        store.dispatch(addExpensive(expensiveSaved));
        return expensiveSaved;
    }

    private populateExpensive (data: any): Expensive {
        const expensive: Expensive = new Expensive();
        expensive.id = data.id;
        expensive.name = data.name;
        expensive.description = data.description;
        expensive.price = data.price;
        expensive.created = data.created;
        expensive.categoryDTO = data.categoryDTO;
        return expensive;
    }

}