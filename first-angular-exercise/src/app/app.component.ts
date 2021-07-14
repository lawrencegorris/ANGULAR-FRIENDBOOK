import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Friend } from './friend';
import { AddFriendService } from './add-friend.service';
import { all } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  friendModel = new Friend('', '', '', '', '', '');
  allFriends: any;

  sendData = () => {
    this.addFriendService.addFriend(this.friendModel).subscribe(friend => alert('Your data was added. Nice getting to know you'), error => alert("it didn't work"));
    this.getData('http://localhost:9001/allFriends')
  }

  public async getData(url: string): Promise <any>{
    await fetch(url, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    }).then(response => {
      return response.json()
    }).then(data => this.allFriends = data);
    return;
  }

  ngOnInit(): any {
    this.getData('http://localhost:9001/allFriends');
  }

  constructor(private addFriendService: AddFriendService){
  }
  
}
