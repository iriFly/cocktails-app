import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CocktailService } from '../../services/cocktail.service';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {
  ingredients$: Observable<Array<string>>;

  constructor(private cocktailService: CocktailService) { }

  ngOnInit(): void {
    this.ingredients$ = this.cocktailService.getIngredients();
  }

}
