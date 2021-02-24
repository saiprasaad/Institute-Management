import { subdetailsclass } from './../viewfeedback/viewfeedback.component';

import { subjects } from './suballocservice.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { feedback } from '../submitfeedback/submitfeedback.component';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient) { }
  getSubjectNames(sem,dept)
  {
    return this.http.get<subjects>(`http://localhost:8080/getAllsubjectdetails/${sem}/${dept}`);
  }
  getDept(rollno)
  {
    return this.http.get<string>(`http://localhost:8080/getdept/${rollno}`,{responseType:'text' as 'json'});
  }
  getSubname(subcode)
  {
    return this.http.get<string>(`http://localhost:8080/getSubname/${subcode}`,{responseType:'text' as 'json'})
  }
  putfeedback(form)
  {
   return this.http.post<feedback>('http://localhost:8080/submitfeedback',form,{responseType:'text' as 'json'}) 
  }
  getStaffNamebysubcode(subcode,sec)
  {
    return this.http.get<string>(`http://localhost:8080/getStaffbysubcode/${subcode}/${sec}`,{responseType:'text' as 'json'})
  }
  getSubjectDetails(dept,staffid,sec,sem)
  {
    return this.http.get<subdetailsclass>(`http://localhost:8080/viewstaffdetails/${dept}/${staffid}/${sec}/${sem}`)
  }
  getSubjectDetails1(dept,sec,sem)
  {
    return this.http.get<subdetailsclass>(`http://localhost:8080/viewstaffdetails1/${dept}/${sec}/${sem}`)
  }
  gett1count(batch,dept,sec,staffid,subcode,p)
  {
    console.log(staffid);
    return this.http.get<number>(`http://localhost:8080/gett1count/${batch}/${dept}/${sec}/${staffid}/${subcode}/${p}`)
  }
  gett2count(batch,dept,sec,staffid,subcode,p)
  {
    return this.http.get<number>(`http://localhost:8080/gett2count/${batch}/${dept}/${sec}/${staffid}/${subcode}/${p}`)
  }
  gett3count(batch,dept,sec,staffid,subcode,p)
  {
    return this.http.get<number>(`http://localhost:8080/gett3count/${batch}/${dept}/${sec}/${staffid}/${subcode}/${p}`)
  }
  gett4count(batch,dept,sec,staffid,subcode,p)
  {
    return this.http.get<number>(`http://localhost:8080/gett4count/${batch}/${dept}/${sec}/${staffid}/${subcode}/${p}`)
  }
}
