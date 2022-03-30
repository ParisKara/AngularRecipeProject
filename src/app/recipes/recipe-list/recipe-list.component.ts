import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;
  @Input() searchFilter = '';
  pageNumber = 0;
  elementsPerPage = 5;
  numberOfPages = 0;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
        this.numberOfPages = Math.ceil(
          this.recipes.length / this.elementsPerPage
        );
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onPrevious() {
    if (this.pageNumber > 0){
      this.pageNumber--;
    }
  }

  onNext() {
    if (this.pageNumber < this.numberOfPages -1) {
      this.pageNumber++;
    }
  }
}
