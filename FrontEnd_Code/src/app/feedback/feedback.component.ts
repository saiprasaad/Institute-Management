import { Router } from '@angular/router';
import { FeedbackService } from './../services/feedback.service';
import { SuballocserviceService, subjects } from './../services/suballocservice.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
details:FormGroup;
subarray:string[]=["","","","","",""];
subcode:string[]=["","","","","",""];
sem:number;
year:number;
batch:number;
subname:string;
dept:string;
  constructor(private fb:FormBuilder,private service:FeedbackService,private route:Router) {
  this.service.getDept(sessionStorage.getItem('username')).subscribe(
    data=>{
      this.dept=data;
      console.log(data);
    }
  )
    this.details=this.fb.group({
      batch:[''],
      sem:[''],
      subject:['']
    })
   }
   onChangesem(sem)
   {
    this.sem=sem;
    this.service.getSubjectNames(sem,this.dept).subscribe(
      data=>{
        // console.log(data['length']);
        // this.subarray[]=data;
        // this.subarray=data.subname;
        for(let j=0;j<data['length'];j++)
        {
          this.subarray[j]=data[j].subname;
          this.subcode[j]=data[j].subcode;
          // console.log(data[j])
        }
      }
    )
   }
   onChangebatch(batch)
   {
    this.batch=batch;
   }
submitform()
{
  console.log(this.details.value);
  this.service.getSubname(this.details.get('subject').value).subscribe(
    data=>{
      this.subname=data;
    }
  )
  this.route.navigate(['/submitfeedback',this.dept,this.details.get('batch').value,this.details.get('sem').value,this.details.get('subject').value,this.subname])
}
  ngOnInit(): void {
  }

}
