import { Component, Input } from '@angular/core';

import { Recipe } from '../recipe'

@Component({
	selector: 'rb-recipe-item',
	templateUrl: './recipe-item.component.html',
	styles: []
})
export class RecipeItemComponent {
	@Input() recipe: Recipe; //recipe is of type Recipe
	@Input() recipeId: number;		// recipeId is of type number

}
