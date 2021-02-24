import { User } from './../users';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Staff } from '../staff';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { 
  }
  authenticate(username)
  {
    // console.log(username);
    return this.http.get<User>(`http://localhost:8080/login/${username}`);
    // if(username==="sai" && password==="vishaal")
    // {
    //   
    // return true;
    // }
    // else
    // return false;
  }
  authenticatestaff(username)
  {
    return this.http.get<Staff>(`http://localhost:8080/stafflogin/${username}`);
  }
  isuserloggedin()
  {
    if(sessionStorage.getItem('username'))
    return true;
    else
    return false;
  }
  logout()
  {
    sessionStorage.removeItem('username');
  }
  // register(user)
  // {
  //   return this.http.post<User>('http://localhost:8080/register',user,{responseType:'text' as 'json'});
  // }
}
