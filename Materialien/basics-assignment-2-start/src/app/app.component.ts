import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userName = '';

  userNameIsEmpty() {
    return (this.userName.trim().length === 0);
  }

  resetUserName() {
    this.userName = '';
  }
}
