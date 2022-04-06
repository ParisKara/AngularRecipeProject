import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import { map, tap } from 'rxjs';
import { __importDefault } from 'tslib';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  fetchRecipes(){
    return this.http
      .get<{ meals: any }>(
        'https://www.themealdb.com/api/json/v1/1/search.php?f=s'
      )
      .pipe(
        map((responseData) =>
          responseData.meals.map((meal) => ({
            id: +meal.idMeal,
            name: meal.strMeal,
            category: meal.strCategory,
            instructions: meal.strInstructions,
            image: meal.strMealThumb,
          }))
        )
      ,tap(recipes => {
        this.recipeService.setRecipes(<Recipe[]>recipes);
      })
    );
  }
}
