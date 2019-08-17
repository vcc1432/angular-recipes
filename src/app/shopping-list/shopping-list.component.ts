import { ShoppingListService } from './shopping-list.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subscription } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private subscriptions = new Subscription();

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscriptions.add(this.shoppingListService.ingredientsChanged
      .subscribe(
        ((ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        } )
      )
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  onEditItem(index: number) {
    
  }
}
