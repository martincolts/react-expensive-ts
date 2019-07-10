import * as React from 'react';
import Category from 'src/category/category';
import Expensive from './expensive';
import ExpensiveService from './expensiveService';

interface IExpensiveFormState {
    name: string;
    category: number;
    price: number;
    description: string;
}

export default class ExpensiveForm extends React.Component<any, IExpensiveFormState> {
    private expensiveService: ExpensiveService;
    constructor(props: any){
        super(props);

        this.state={
            category: 0,
            description:"",
            name: "",
            price: 0
        }

        this.expensiveService = new ExpensiveService();
        this.handleChange = this.handleChange.bind(this);
        this.saveExpensive = this.saveExpensive.bind(this);
    }

    public handleChange(event: any) {
            const name = event.target.name;
            const value = event.target.value;

            this.setState({
                ...this.state,
                [name]: value
            });
    }

    public saveExpensive() {
        const expensive: Expensive = this.createExpensive();
        this.expensiveService.saveExpensive(expensive);
    }

    public render() {
        return(
            <div>
                <label>Nombre</label>
                <input name="name" value={this.state.name} onChange={this.handleChange}/>

                <label>Description</label>
                <input name="description" value={this.state.description} onChange={this.handleChange}/>

                <label>Category</label>
                <input name="category" value={this.state.category} onChange={this.handleChange}/>

                <label>Price</label>
                <input name="price" type="number" value={this.state.price} onChange={this.handleChange}/>

                <button onClick={this.saveExpensive}>Guardar</button>
            </div>
        )
    }

    private createExpensive(): Expensive {
        const expensive: Expensive = new Expensive();
        expensive.name = this.state.name;
        expensive.description = this.state.description;
        expensive.price = this.state.price;
        expensive.categoryDTO = new Category();
        expensive.categoryDTO.id = this.state.category;
        return expensive;
    }
}