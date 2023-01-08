import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, mergeMap, Observable, tap } from 'rxjs';

export interface UserState {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root',
})
export class UserStateService {
  userState: BehaviorSubject<UserState> = new BehaviorSubject<UserState>({});
  getUseData() {
    return this.http.get('/api/getUserInfo');
  }
  getUserState(): BehaviorSubject<UserState> {
    this.getUseData().subscribe((response: any) => {
      this.userState.next(response.data);
    });
    return this.userState;
  }
  constructor(private http: HttpClient) {
    this.getUseData().subscribe((response: any) => {
      this.userState.next(response.data);
    });
  }
}
