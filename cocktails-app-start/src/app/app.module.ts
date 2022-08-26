import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoctailsListComponent } from './components/coctails-list/coctails-list.component';
import { CoctailDetailsComponent } from './components/coctail-details/coctail-details.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CocktailDetailsResolver } from 'src/app/resolvers/cocktail-details.resolver';

const routes: Route[]  = [
{
  path: 'list',
  component: CoctailsListComponent
},

{
  path: 'details/:id',
  component: CoctailDetailsComponent,
  resolve: {
    cocktail: CocktailDetailsResolver
  }
},

{
  path: '',
  pathMatch: 'full',
  redirectTo: 'list'
},

{
  path: '**',
  component: NotFoundPageComponent
}

]

@NgModule({
  declarations: [
    AppComponent,
    CoctailsListComponent,
    CoctailDetailsComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
