import Category from 'src/category/category';

export default class Expensive {
    public id: number;
    public name: string;
    public created: Date;
    public description: string;
    public price: number;
    public categoryDTO: Category;
}