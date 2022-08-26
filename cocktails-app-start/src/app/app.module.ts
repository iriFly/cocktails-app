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
import { IngredientListComponent } from './components/ingredient-list/ingredient-list.component';
import { IngredientDetailsComponent } from './components/ingredient-details/ingredient-details.component';
import { IngredientDetailsResolver } from './resolvers/ingredient-details.resolver';
import { AuthGuard } from 'src/auth.guard';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';

const routes: Route[]  = [
{
  path: 'list',
  component: CoctailsListComponent
},

{
  path: 'details/:id',
  component: CoctailDetailsComponent,
  canActivate: [
    AuthGuard
  ],
  resolve: {
    cocktail: CocktailDetailsResolver
  }
},

{
  path: 'ingredient-list',
  component: IngredientListComponent
},

{
  path: 'ingredient-details/:name',
  component: IngredientDetailsComponent,
  resolve: {
    ingredient: IngredientDetailsResolver
  }
},

{
  path: 'unauthorized',
  component: UnauthorizedComponent
},

{
  path: 'admin',
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
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
    NotFoundPageComponent,
    UnauthorizedComponent
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
