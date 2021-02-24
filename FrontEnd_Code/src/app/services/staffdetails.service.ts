import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaffdetailsService {

  constructor(private http:HttpClient) { }
  getAllStaffs()
  {
   return this.http.get<String>('http://localhost:8080/getAllStaffs');
  }
  getStaffbysubcode(subcode,sec)
  {
    return this.http.get<string>(`http://localhost:8080/getStaffbysubcode/${subcode}/${sec}`,{responseType:'text' as 'json'})
  }
  getStaffNamebysubcode(subcode,sec)
  {
    return this.http.get<string>(`http://localhost:8080/getStaffNamebysubcode/${subcode}/${sec}`,{responseType:'text' as 'json'})
  }
}
