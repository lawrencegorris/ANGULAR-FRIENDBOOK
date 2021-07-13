import { Component } from '@angular/core';
import { Friend } from './friend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  friendModel = new Friend('', '', '', '', '');
  sendData = () => {
    console.log(this.friendModel);
  }
}
