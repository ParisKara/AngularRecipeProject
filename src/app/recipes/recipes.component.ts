import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  searchFilter = '';
  isLoading = false;

  constructor( private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
  }

  onFetchData() {
    this.isLoading = true;
    this.dataStorageService.fetchRecipes().subscribe(() => {
      this.isLoading = false;
    }, () =>{
      this.isLoading = false;
    });
  }
}
