import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktail } from '../../cocktail.model';
import { CocktailService } from '../../services/cocktail.service';

@Component({
  selector: 'app-coctails-list',
  templateUrl: './coctails-list.component.html',
  styleUrls: ['./coctails-list.component.css']
})
export class CoctailsListComponent implements OnInit {
  cocktails$: Observable<Cocktail[]>;

  constructor(private cocktailService: CocktailService) { }

  ngOnInit(): void {
    this.cocktails$ = this.cocktailService.listByFirstLetter('a');

    // this.cocktails$.subscribe(res => {
    //   console.log(res);

    // })
  }

}
