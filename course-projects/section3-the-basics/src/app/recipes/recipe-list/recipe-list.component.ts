import { Component, OnInit } from '@angular/core';
// import { Recipe } from '../recipe.model';
import { IRecipe } from '../recipe.contract';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: IRecipe[] = [
    {
      name: `'Nasi Kuning' recipe`,
      description: `This is the recipe of delicious Indonesian's Yellow Rice.`,
      imagePath: `http://bit.ly/2wpsyfx`
    }
    // new Recipe(`'Nasi Kuning' recipe`,
    //            `This is the recipe of delicious Indonesian's Yellow Rice.`,
    //            `http://bit.ly/2wpsyfx`)
  ];

  constructor() { }

  ngOnInit() {
  }

}
