import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe'

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html',
  styles: []
})
export class RecipeItemComponent implements OnInit {
	@Input() recipe: Recipe; //recipe is of type Recipe
	recipeId: number;		// recipeId is of type number
	
	constructor() {}
	
	ngOnInit() {
	}


}
