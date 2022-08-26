import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CocktailService } from './cocktail.service';
import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class IngredientDetailsResolver implements Resolve<Observable<Ingredient>> {

  constructor(private cocktailService: CocktailService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Ingredient> {
    const name = route.paramMap.get('name');
    return this.cocktailService.getIngredientByName(name);
  }
}
