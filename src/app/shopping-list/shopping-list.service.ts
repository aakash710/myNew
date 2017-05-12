
import { Ingredient } from '../shared/ingredient';

export class ShoppingListService {
  private items: Ingredient[] = [];
  constructor() { }

  getItem() {
    return this.items;
  }

  addItems(items: Ingredient[]) {
    Array.prototype.push.apply(this.items, items); // it will be used whereever there is an array in shopping list
    //i.e it will push items from additems to this.items OR FOR loop can be used

    //  for (var index = 0; index < items.length; index++) {
    //    this.items[index] = items[index];
    //  }
  }
}
