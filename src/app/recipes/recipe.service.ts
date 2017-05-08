import { Injectable } from '@angular/core';

import { Recipe } from './recipe';


@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Chicken Biryani', 'Very Tasty', 'http://www.indianfoodforever.com/images/chicken-biryani.jpg', []),
    new Recipe('Chicken Curry', 'Yummy', 'http://www.indianfoodforever.com/images/chicken-curry.jpg', []),
    new Recipe('Chicken Tikka Masala', 'Delicious', 'http://www.indianfoodforever.com/images/chicken-tikka-masla.jpg', []),

  ];
  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}
