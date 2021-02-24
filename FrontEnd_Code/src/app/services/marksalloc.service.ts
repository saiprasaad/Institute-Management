import { marks } from './../addmarks/addmarks.component';
import { User } from './../users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getmarks } from '../marksdisplay/marksdisplay.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarksallocService {

  constructor(private http:HttpClient) { }
  getAllRollnos(dept,sec,batch)
  {
    return this.http.get<User>(`http://localhost:8080/findAll/${dept}/${sec}/${batch}`);
  }
  putmarks(marks)
  {
    console.log(marks);
    return this.http.post<marks>('http://localhost:8080/marksalloc',marks,{responseType:'text' as 'json'});
  }
  getMarks(rollno,testtype,sem)
  {
    return this.http.get<getmarks>(`http://localhost:8080/getMarksbyrollno/${rollno}/${testtype}/${sem}`);
  }
  getpasscount(sem,dept,testtype)
  {
    return this.http.get<number>(`http://localhost:8080/getpasscount/${sem}/${dept}/${testtype}`);
  }
  getfailcount(sem,dept,testtype)
  {
    return this.http.get<number>(`http://localhost:8080/getfailcount/${sem}/${dept}/${testtype}`);
  }
  getpasscountbysubject(sem,dept,testtype,subname,sec)
  {
    return this.http.get<number>(`http://localhost:8080/getpasscountbysubject/${sem}/${dept}/${testtype}/${subname}/${sec}`);
  }
  getfailcountbysubject(sem,dept,testtype,subname,sec)
  {
    return this.http.get<number>(`http://localhost:8080/getfailcountbysubject/${sem}/${dept}/${testtype}/${subname}/${sec}`);
  }


  donwloadmarkspdf() : Observable<Blob>
  {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/pdf',
    //     responseType: 'blob' as 'json',
    //     Accept : 'application/pdf',
    //     observe : 'response'
    //   })
    // };
    return this.http.get('http://localhost:8080/pdf/marks/17CS225/iae1/7', {responseType: 'blob'});
  }
}
