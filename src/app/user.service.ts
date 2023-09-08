// user.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userName: string | undefined;

  constructor() {}

  // Method to set the user name
  setUserName(userName: string): void {
    this.userName = userName;
  }

  // Method to get the user name
  getUserName(): string | undefined {
    return this.userName;
  }
}

