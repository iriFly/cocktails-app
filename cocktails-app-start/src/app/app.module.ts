import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoctailsListComponent } from './coctails-list/coctails-list.component';
import { CoctailDetailsComponent } from './coctail-details/coctail-details.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Route[]  = [
{
  path: 'list',
  component: CoctailsListComponent
},

{
  path: 'coctail-details/:id',
  component: CoctailDetailsComponent
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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }