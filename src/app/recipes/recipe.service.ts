import { Injectable } from '@angular/core';

import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';


@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Chicken Biryani', 'Very Tasty', 'http://www.indianfoodforever.com/images/chicken-biryani.jpg', [
      new Ingredient('Chicken',10),
      new Ingredient('Rice',10),
      new Ingredient('Masala',10)
    ]),
    new Recipe('Chicken Curry', 'Yummy', 'http://www.indianfoodforever.com/images/chicken-curry.jpg', [
      new Ingredient('Chicken',50),
      new Ingredient('Curry',60),
      new Ingredient('Masala',80)
    ]),
    new Recipe('Chicken Tikka Masala', 'Delicious', 'http://www.indianfoodforever.com/images/chicken-tikka-masla.jpg', [
      new Ingredient('Chicken',100),
      new Ingredient('Vegetables',10),
      new Ingredient('Masala',1)
    ]),

  ];
  constructor() { }

  getRecipes() {
    return this.recipes;
  }
  
  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe){
    this.recipes.slice(this.recipes.indexOf(recipe), 1); //it will slice recipe into half Recipe can also be deleted using Id
  }
}
