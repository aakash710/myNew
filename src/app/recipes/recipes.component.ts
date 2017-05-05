import { Component } from '@angular/core';

import { Recipe } from './recipe';

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html',
  styles: []
})
export class RecipesComponent  {
  
  selectedRecipe: Recipe;
  
}
