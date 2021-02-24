import { Router } from '@angular/router';
import { MarksallocService } from './../services/marksalloc.service';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
export class marks{
  // public id:number;
  public rollno:string;
  public testtype:string;
  public marks:number;
  public subcode:string;
  public staffid:string;
  constructor(rollno,testtype,marks,subcode,staffid)
  {
    // this.id=id;
    this.rollno=rollno;
    this.testtype=testtype;
    this.marks=marks;
    this.subcode=subcode;
    this.staffid=staffid;
  }

}
@Component({
  selector: 'app-addmarks',
  templateUrl: './addmarks.component.html',
  styleUrls: ['./addmarks.component.css']
})
export class AddmarksComponent implements OnInit {
  rollnos:String;
  i:number=0;
  productForm: FormGroup;
  myGroup:FormGroup;
  marksvar:marks;
  rollnumbers:any[];
  show:Boolean=false;
  constructor(private fb:FormBuilder,private service:MarksallocService,private route:Router) { 
    this.marksvar=new marks("","",0,"","");
    this.myGroup=this.fb.group({
      batch:[''],
      subcode:[''],
      dept:[''],
      sec:[''],
      testtype:['']
    });
    this.productForm = this.fb.group({
      values: this.fb.array([]) ,
    });
  }
  
  values() : FormArray {
    return this.productForm.get("values") as FormArray
  }
   
  newValue(): FormGroup {
    return this.fb.group({
      rollno:[''],
      marks:['']
    })
  }
      

  ngOnInit(): void {
  }
  submitfn()
  {
    console.log(this.myGroup.get('testtype').value);
  console.log(this.myGroup.get('subcode').value);
  this.rollnumbers=new Array();
    this.service.getAllRollnos(this.myGroup.get('dept').value,this.myGroup.get('sec').value,this.myGroup.get('batch').value).subscribe(
      data=>{
        this.rollnumbers.push(data);
        console.log(this.rollnumbers[0][1].rollno)
        for(let i=0;i<this.rollnumbers[0].length;i++)
        {
          this.values().push(this.fb.group({
            rollno:this.rollnumbers[0][i].rollno,
            marks:[''],
          }));
        }
      }
    )
    this.show=true;
  }
  onSubmitMarks()
  {
    for(let j=0;j<this.productForm.value['values'].length;j++)
    {
    this.marksvar.rollno=this.productForm.value['values'][j].rollno;
    this.marksvar.marks=this.productForm.value['values'][j].marks
    this.marksvar.testtype=this.myGroup.get('testtype').value
    this.marksvar.subcode=this.myGroup.get('subcode').value
    this.marksvar.staffid=sessionStorage.getItem('username');
   this.service.putmarks(this.marksvar).subscribe(
     data=>{
       console.log(data);
     }
    
   )
   this.route.navigate(['staffhome']);
    }
  }

}
