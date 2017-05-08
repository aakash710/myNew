import { Component, EventEmitter, Output } from '@angular/core';


import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent {
	recipes: Recipe[] = [
      new Recipe('Chicken Biryani', 'Very Tasty', 'http://www.indianfoodforever.com/images/chicken-biryani.jpg'),
      new Recipe('Chicken Curry', 'Yummy', 'http://www.indianfoodforever.com/images/chicken-curry.jpg'),
      new Recipe('Chicken Tikka Masala', 'Delicious', 'http://www.indianfoodforever.com/images/chicken-tikka-masla.jpg'),

  ];

   @Output() recipeSelected = new EventEmitter<Recipe>();

	

    onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
