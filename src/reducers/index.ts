import Category from 'src/category/category';
import Expensive from 'src/expensives/expensive';

interface IStore {
    expensives: Expensive[];
    categories: Category[];
}

const initialState: IStore= {
    categories: [],
    expensives:[]
  };

function rootReducer(state: IStore = initialState, action: any) {
    if (action.type === "ADD_EXPENSIVES") {
        state.expensives = action.expensives;
    }
    if (action.type === "ADD_EXPENSIVE") {
        state.expensives.push(action.expensive);
    }
    if (action.type === "ADD_CATEGORIES") {
        state.categories = action.categories
    }
    state.expensives.sort(dynamicSort("created"))
    return state;
};

function dynamicSort(property: any) {
    let sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    // tslint:disable-next-line:only-arrow-functions
    return function (b: any,a: any) {
    const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    return result * sortOrder;
    }
}
export default rootReducer;