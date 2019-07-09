import Category from 'src/category/category';
import Expensive from 'src/expensives/expensive';

export function addExpensives (expensives: Expensive[]) {
    return {type: "ADD_EXPENSIVES", expensives};
}

export function addExpensive (expensive: Expensive) {
    return {type: "ADD_EXPENSIVE", expensive};
}

export function addCategories (categories: Category[]) {
    return {type: "ADD_CATEGORIES", categories}
}