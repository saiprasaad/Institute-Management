import { User } from './../users';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  constructor(private http:HttpClient) { }
  getStudentDetails(rollno)
  {
    return this.http.get<User>(`http://localhost:8080/getStudentDetails/${rollno}`);
  }
}
