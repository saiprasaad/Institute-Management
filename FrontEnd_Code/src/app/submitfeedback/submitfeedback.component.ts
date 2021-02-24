import { FeedbackService } from './../services/feedback.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProfilesService } from './../services/profiles.service';
import { StaffdetailsService } from './../services/staffdetails.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
export class feedback{
  subcode:string;
  staffid:string;
  sec:string;
  t1:number;
  t2:number;
  t3:number;
  t4:number;
  batch:number;
  dept:string;
  constructor(subcode,staffid,sec,t1,t2,t3,t4,batch,dept)
  {
    this.subcode=subcode;
    this.staffid=staffid;
    this.sec=sec;
    this.t1=t1;
    this.t2=t2;
    this.t3=t3;
    this.t4=t4;
    this.batch=batch;
    this.dept=dept;
  }
}
@Component({
  selector: 'app-submitfeedback',
  templateUrl: './submitfeedback.component.html',
  styleUrls: ['./submitfeedback.component.css']
})
export class SubmitfeedbackComponent implements OnInit {
  subcode:string;
  subname:string;
  batch:number;
  sem:number;
  dept:string;
  ans:string;
  ans1:string[];
  staffid:string;
  staffname:string;
  sec:string;
  feedbackform:FormGroup;
  constructor(private router:ActivatedRoute,private service:StaffdetailsService,private service1:ProfilesService,private fb:FormBuilder,private service2:FeedbackService,private route:Router) { 
    this.feedbackform=this.fb.group({
      subcode:[''],
      staffid:[''],
      sec:[''],
      t1:[''],
      t2:[''],
      t3:[''],
      t4:[''],
      batch:[''],
      dept:['']
    })
  }

  ngOnInit(): void {
    this.subcode=this.router.snapshot.params['subcode'];
    this.dept=this.router.snapshot.params['dept'];
    this.subname=this.router.snapshot.params['subname'];
    this.sem=this.router.snapshot.params['sem'];
    this.batch=this.router.snapshot.params['batch'];

    this.service1.getStudentDetails(sessionStorage.getItem('username')).subscribe(
      data=>{
        this.sec=data.sec;
        // console.log(this.sec);
        this.service.getStaffNamebysubcode(this.subcode,this.sec).subscribe(
          data=>{
            console.log(this.sec);
            this.ans=data;
            this.staffid=this.ans.substring(0,5);
            this.staffname=this.ans.substring(6,this.ans.length);
            this.feedbackform.controls['dept'].setValue(this.dept);
            this.feedbackform.controls['batch'].setValue(this.batch);
            this.feedbackform.controls['staffid'].setValue(this.staffid);
            this.feedbackform.controls['subcode'].setValue(this.subcode);
            this.feedbackform.controls['sec'].setValue(this.sec);
          }
        )
      }
    )
   
  }
  submitfeedbackform()
  {
    this.service2.putfeedback(this.feedbackform.value).subscribe(
      data=>{
        console.log(data);
        this.route.navigate(['userhome',sessionStorage.getItem('username')]);
      }
    )
    // console.log(this.feedbackform.value);
  }

}
