import { Ingredient } from "../shared/ingredient" ;

export class Recipe {
	constructor(public name, public description, public imagePath, public ingredients: Ingredient[]) {
		this.name = name;
		this.description = description;
		this.imagePath = imagePath;
		this.ingredients = ingredients;
	}
}
