import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Friend } from './friend';

@Injectable({
  providedIn: 'root'
})

export class AddFriendService {
  url: string = 'http://localhost:9001/allFriends';

  constructor(private http: HttpClient) {}

  public addFriend(friend: Friend){
    return this.http.post(this.url, friend);
  }
  
}
