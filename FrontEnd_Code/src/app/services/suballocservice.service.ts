import { viewstaffdet } from './../viewstaffs/viewstaffs.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { staffsub } from '../addsubjects/addsubjects.component';
export class subjects{
  id:number;
  dept:string;
  sem:number;
  subcode:string;
  subname:string;
  constructor(id,dept,sem,subcode,subname)
  {
      this.id=id;
      this.dept=dept;
      this.sem=sem;
      this.subcode=subcode;
      this.subname=subname;
  }
}
export class staffdetails{
  id:number;
  batch:number;
  dept:string;
  sec:string;
  sem:number;
  staffid:string;
  subcode:string;
  constructor(id,batch,dept,sec,sem,staffid,subcode)
  {
      this.id=id;
      this.batch=batch;
      this.dept=dept;
      this.sec=sec;
      this.sem=sem;
      this.staffid=staffid;
      this.subcode=subcode;
  }
}
@Injectable({
  providedIn: 'root'
})
export class SuballocserviceService {

  constructor(private http:HttpClient) { }
  getSubjects(sem,dept)
  {
    return this.http.get<subjects>(`http://localhost:8080/subdetails/${sem}/${dept}`);
  }
  putstaffdetails(staffsub)
  {
    console.log(staffsub);
    return this.http.post<staffsub>('http://localhost:8080/suballoc',staffsub,{responseType:'text' as 'json'});
  }
  getStaffdetails(sem,batch,dept,sec)
  {
    return this.http.get<viewstaffdet>(`http://localhost:8080/viewstaffalloc/${sem}/${batch}/${dept}/${sec}`);
  }
  getSubjectNames(sem,dept)
  {
    return this.http.get<string>(`http://localhost:8080/getAllsubjects/${sem}/${dept}`);
  }
}
