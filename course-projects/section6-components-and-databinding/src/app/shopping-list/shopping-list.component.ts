import { Component, OnInit } from '@angular/core';
import { IIngredient } from '../shared/ingredient.contract';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IIngredient[]= [
    { name: "Rice", amount: 5, amount_type: "kg"},
    { name: "Turmeric", amount: 3 },
    { name: "Red Onion", amount: 3 },
    { name: "Garlic", amount: 3 },
    { name: "Candlenut", amount: 3 },
    { name: "Bay Leaf", amount: 3 },
    { name: "Lemongrass", amount: 3 },
    { name: "Pandan Leaf", amount: 1 },
    { name: "Choconut Milk", amount: 750, amount_type: "ml"},
    { name: "Salt", amount: 1, amount_type: "table spoon"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
