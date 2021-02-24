import { Router } from '@angular/router';
import { FeedbackService } from './../services/feedback.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
export class subdetailsclass
{
  public subcode:string;
  public subname:string; 
  constructor(subcode,subname)
  {
    this.subcode=subcode;
    this.subname=subname;
  }

}
@Component({
  selector: 'app-viewfeedback',
  templateUrl: './viewfeedback.component.html',
  styleUrls: ['./viewfeedback.component.css']
})
export class ViewfeedbackComponent implements OnInit {
  details:FormGroup;
  subarray:string[]=[""];
  subcode:string[]=[""];
  sem:number;
  year:number;
  batch:number;
  subname:string;
  dept:string;
  staffid:string;
  sec:string;
  alert:boolean=false;
    constructor(private fb:FormBuilder,private service:FeedbackService,private route:Router) {
    // this.service.getDept(sessionStorage.getItem('username')).subscribe(
    //   data=>{
    //     this.dept=data;
    //     console.log(data);
    //   }
    // )
      this.details=this.fb.group({
        batch:[''],
        sem:[''],
        dept:[''],
        sec:[''],
        subject:['']
      })
     }
     onChangesem(sem)
     {
      this.sem=sem;
      
      // this.service.getSubjectNames(sem,this.dept).subscribe(
      //   data=>{
      //     // console.log(data['length']);
      //     // this.subarray[]=data;
      //     // this.subarray=data.subname;
      //     for(let j=0;j<data['length'];j++)
      //     {
      //       this.subarray[j]=data[j].subname;
      //       this.subcode[j]=data[j].subcode;
      //       // console.log(data[j])
      //     }
      //   }
      // )
     }
     onChangebatch(batch)
     {
      this.batch=batch;
     }
     onChangeDept(dept)
     {
       this.dept=dept;
       if(sessionStorage.getItem('username')=='admin')
       {
        console.log('true');
        this.service.getSubjectDetails1(this.dept,this.sec,this.sem).subscribe(
          data=>{
           //  console.log(data['length']);
           for(let j=0;j<data['length'];j++)
         {
           this.subarray[j]=data[j].subname;
           this.subcode[j]=data[j].subcode;
           // console.log(data[j])
         }
            console.log(data);
          },
          error=>
          {
            this.alert=true;
          }
          
        )
       }
       else
       {
       this.service.getSubjectDetails(this.dept,sessionStorage.getItem('username'),this.sec,this.sem).subscribe(
         data=>{
          //  console.log(data['length']);
          for(let j=0;j<data['length'];j++)
        {
          this.subarray[j]=data[j].subname;
          this.subcode[j]=data[j].subcode;
          // console.log(data[j])
        }
           console.log(data);
         },
         error=>
         {
           this.alert=true;
         }
         
       )
     }}
     onChangesec(sec)
     {
       this.sec=sec;
     }
  submitform()
  {
    console.log(this.details.value);
    this.service.getSubname(this.details.get('subject').value).subscribe(
      data=>{
        this.subname=data;
        console.log(data);
      }
    )
    if(sessionStorage.getItem('username')=='admin')
    {
      this.route.navigate(['/feedbackcountadmin',this.dept,this.details.get('batch').value,this.details.get('sem').value,this.details.get('subject').value,this.subname,this.details.get('sec').value])
    }
    else
    this.route.navigate(['/feedbackcount',this.dept,this.details.get('batch').value,this.details.get('sem').value,this.details.get('subject').value,this.subname,this.details.get('sec').value])
  }
    ngOnInit(): void {
    }

}
