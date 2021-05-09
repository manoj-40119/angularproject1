import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent  {
  recipes : Recipe[] = [
    new Recipe('Item Name','Sample Test','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2BFanf5H9xCJOl-IfN7GwSc68GO8M-Z38Ew&usqp=CAU')
  ];

  constructor() { }



}
