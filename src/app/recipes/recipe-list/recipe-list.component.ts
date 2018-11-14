import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

	recipes : Recipe [] = [
		new Recipe('the new recipe','the new description','https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/a/3a/a3ac2583-4bf3-5a43-b71a-8ae061279d43/555de70049716.image.gif'),
		new Recipe('the new recipe','the new description','https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/a/3a/a3ac2583-4bf3-5a43-b71a-8ae061279d43/555de70049716.image.gif')
	];

  constructor() { }

  ngOnInit() {
  }

}
