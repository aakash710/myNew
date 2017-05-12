import { Component, EventEmitter, Output } from '@angular/core';

import { RecipeService } from '../recipe.service';

import { Recipe } from '../recipe';

@Component({
    selector: 'rb-recipe-list',
    templateUrl: './recipe-list.component.html',
    styles: []
})
export class RecipeListComponent {
   private recipes: Recipe[] = [
        ];

   

constructor(private recipeService: RecipeService) { }

ngOnInit(){
    this.recipes = this.recipeService.getRecipes();
}

   

}
