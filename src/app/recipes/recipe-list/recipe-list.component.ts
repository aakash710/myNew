import { Component, EventEmitter, Output } from '@angular/core';


import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent {
	recipes: Recipe[] = [];

   @Output() recipeSelected = new EventEmitter<Recipe>();

	recipe = new Recipe('Dummy', 'Dummy', 'http://thumbs1.ebaystatic.com/d/l225/m/mmO4j9mo_hxxVRI9oarv-Hw.jpg');

    onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
