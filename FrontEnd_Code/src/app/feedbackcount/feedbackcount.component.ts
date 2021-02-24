import { FeedbackService } from './../services/feedback.service';
import { ProfilesService } from './../services/profiles.service';
import { StaffdetailsService } from './../services/staffdetails.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedbackcount',
  templateUrl: './feedbackcount.component.html',
  styleUrls: ['./feedbackcount.component.css']
})
export class FeedbackcountComponent implements OnInit {

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
  t1:number[]=[];
  t2:number[]=[];
  t3:number[]=[];
  t4:number[]=[];
  constructor(private router:ActivatedRoute,private service:StaffdetailsService,private service1:ProfilesService,private fb:FormBuilder,private service2:FeedbackService,private route:Router) { 
    this.subcode=this.router.snapshot.params['subcode'];
    this.dept=this.router.snapshot.params['dept'];
    this.subname=this.router.snapshot.params['subname'];
    this.sem=this.router.snapshot.params['sem'];
    this.batch=this.router.snapshot.params['batch'];
    this.sec=this.router.snapshot.params['sec'];
    this.staffid=sessionStorage.getItem("username");
    console.log(this.subcode);
    this.service.getStaffNamebysubcode(this.subcode,'C').subscribe(
      data=>{
        this.staffname=data;
        console.log(data);
      }
    )
    let i=0;
    for(let j=5;j>=1;j--)
    {
    this.service2.gett1count(this.batch,this.dept,this.sec,this.staffid,this.subcode,j).subscribe(
      data=>{
        console.log(data);
        
        this.t1[i]=data;
        i++;
        console.log(this.t1);
      }
    )
    }
    i=0;
    for(let j=5;j>=1;j--)
    {
    this.service2.gett2count(this.batch,this.dept,this.sec,this.staffid,this.subcode,j).subscribe(
      data=>{
        this.t2.push(data)
        console.log(data);
        // this.t1.push(data);
      }
    )
    }
    i=0;
    for(let j=5;j>=1;j--)
    {
    this.service2.gett3count(this.batch,this.dept,this.sec,this.staffid,this.subcode,j).subscribe(
      data=>{
        this.t3.push(data)
        console.log(data);
        // this.t1.push(data);
      }
    )
    }
    i=0;
    for(let j=5;j>=1;j--)
    {
    this.service2.gett4count(this.batch,this.dept,this.sec,this.staffid,this.subcode,j).subscribe(
      data=>{
        this.t4.push(data)
        console.log(data);
        // this.t1.push(data);
      }
    )
    }
    // this.feedbackform=this.fb.group({
    //   subcode:[''],
    //   staffid:[''],
    //   sec:[''],
    //   t1:[''],
    //   t2:[''],
    //   t3:[''],
    //   t4:[''],
    //   batch:[''],
    //   dept:['']
    // })
    
  }

  ngOnInit(): void {
    
    // this.service1
    // this.service1.getStudentDetails(sessionStorage.getItem('username')).subscribe(
    //   data=>{
    //     console.log(data)
    //     this.sec=data.sec;
    //     // console.log(this.sec);
    //     this.service.getStaffNamebysubcode(this.subcode,this.sec).subscribe(
    //       data=>{
    //         console.log(this.sec);
    //         this.ans=data;
    //         this.staffid=this.ans.substring(0,5);
    //         this.staffname=this.ans.substring(6,this.ans.length);
    //         this.feedbackform.controls['dept'].setValue(this.dept);
    //         this.feedbackform.controls['batch'].setValue(this.batch);
    //         this.feedbackform.controls['staffid'].setValue(this.staffid);
    //         this.feedbackform.controls['subcode'].setValue(this.subcode);
    //         this.feedbackform.controls['sec'].setValue(this.sec);
    //       }
    //     )
    //   }
    // )
   
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
