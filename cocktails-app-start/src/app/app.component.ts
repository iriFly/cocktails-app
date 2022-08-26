import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn: boolean;
  title = 'cocktails-app-start';

  constructor(private auth: AuthService){}

  logIn(){
    this.auth.logIn();
    this.loggedIn = true;
  }

  logOut(){
    this.auth.logOut();
    this.loggedIn = false;
  }

}
