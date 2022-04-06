import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeComponent } from "./recipes/recipe/recipe.component";
import { RecipesComponent } from "./recipes/recipes.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent },
  { path: 'recipes/:id', component: RecipeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
