import {GroceryItem} from '../graphql/types/groceryItem';
import {GroceryList} from '../graphql/types/groceryList';
import { v4 as uuidv4 } from 'uuid';

export class GroceryListService {
    listStore: GroceryList[];
    itemStore: GroceryItem[];
    // constructor(listStore: GroceryList[], itemStore: GroceryItem[]) {
    constructor() {
        this.listStore = [];
        this.itemStore = [];
    }

    getListByID(ID: string) : GroceryList {
        // might need to check if empty
        return this.listStore.find((list) => list.id === ID);
    }

    addListToStore(name: string): GroceryList {
        const id = uuidv4();
        const newList = new GroceryList;
        newList.id = id;
        newList.name = name;
        this.listStore.push(newList);
        return newList; // returns the list that was just added
    }

    getAllLists() {
        return this.listStore;
    }
    // addItemToList(listID: string, item: GroceryItem) {
    //     const list = this.getListByID(listID);
    //     list.append(item);
    // }
}

/*TODO::    
-method to create a list *
-method to get list by ID *
-update resolver *
-add a query that will get a list by id
*/

/*TODO Week2::
-resolver for grocery items
-can write a query to get list by id
*/