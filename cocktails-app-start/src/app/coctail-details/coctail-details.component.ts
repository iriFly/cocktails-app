import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Cocktail } from '../cocktail.model';
import { CocktailService } from '../cocktail.service';
@Component({
  selector: 'app-coctail-details',
  templateUrl: './coctail-details.component.html',
  styleUrls: ['./coctail-details.component.css']
})
export class CoctailDetailsComponent implements OnInit {
  // cocktails$: Observable<Cocktail>;
  cocktail: Cocktail;

  constructor(
    private activedRoute: ActivatedRoute
    // private cocktailService: CocktailService
    ) { }

  ngOnInit(): void {
    // this.cocktails$ = this.activedRoute.paramMap.pipe(
    //   switchMap(paramsMap => {
    //     const id = paramsMap.get('id');
    //     return this.cocktailService.getById(id);
    //   })
    // )

    this.activedRoute.data.subscribe((data: {cocktail: Cocktail}) => {
      this.cocktail = data.cocktail;
    })
  }
}
