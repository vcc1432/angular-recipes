import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://c1.staticflickr.com/3/2356/5778822316_9360c4ebfd_b.jpg'),
    new Recipe('A Second Test Recipe', 'Another description', 'https://c1.staticflickr.com/5/4253/34578618823_b9de950c64_b.jpg')
  ]

  constructor() { }

  ngOnInit() {
  }

}
