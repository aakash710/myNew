import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from "../recipe";
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: []
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private recipeId: number;
  selectedRecipe: Recipe;

  constructor(private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private recipesService: RecipeService,
    private router: Router) {

  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
    (params: any) => {
      this.recipeId = params['id'];
      this.selectedRecipe = this.recipesService.getRecipe(this.recipeId);
      
    }
    );
  }

  onEdit(){
      this.router.navigate(['/recipes', this.recipeId, 'edit']);
  }

  onDelete(){
    this.recipesService.deleteRecipe(this.selectedRecipe);
     this.router.navigate(['/recipes'])
  }

  onAddToShoppingList() {
    this.shoppingListService.addItems(this.selectedRecipe.ingredients);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
