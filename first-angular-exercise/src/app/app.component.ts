import { Component } from '@angular/core';
import { Friend } from './friend';
import { AddFriendService } from './add-friend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  friendModel = new Friend('', '', '', '', '');

  sendData = () => {
    console.log(this.friendModel);
    this.addFriendService.addFriend(this.friendModel).subscribe(friend => alert("s"), error => alert("it didn't work"));
    
  }

  constructor(private addFriendService: AddFriendService){
  }
}
