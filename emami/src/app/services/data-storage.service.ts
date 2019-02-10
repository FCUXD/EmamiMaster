import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor() { }

  private userID;
  private userDetails;

  public getUserId():string{
    return this.userID
  }
  public setUserId(userID){
    this.userID=userID;
  }

  public getuserDetails():any{
    return this.userDetails;
  }
  public setuserDetails(userDetails){
    this.userDetails=userDetails;
  }
}

