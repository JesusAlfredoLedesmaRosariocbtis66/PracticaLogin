import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(){

}
  public login(_user:any) {
    return "Ya estoy aqui";
  }
}
