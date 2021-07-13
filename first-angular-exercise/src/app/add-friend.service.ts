import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Friend } from './friend';

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  private url = '';

  addFriend(friend: Friend){
    this.http.post(url, data);
    return;
  }

  constructor(http: HttpClient) {
    
  }
}
