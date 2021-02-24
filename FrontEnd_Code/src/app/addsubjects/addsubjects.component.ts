import { StaffdetailsService } from './../services/staffdetails.service';
import { SuballocserviceService, subjects} from './../services/suballocservice.service';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
export class staffsub{
  public id:number;
  public batch:number;
  public dept:string;
  public sec:string;
  public sem:number;
  public staffid:string;
  public subcode:string;
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
@Component({
  selector: 'app-addsubjects',
  templateUrl: './addsubjects.component.html',
  styleUrls: ['./addsubjects.component.css']
})

export class AddsubjectsComponent implements OnInit {
  userData:String[]=[];
  suballocform:FormGroup;
  subarray:FormGroup;
  suballocform1:FormGroup;
  staffvar:staffsub;
  form1: FormGroup;
  invalid:Boolean=false;
  subdetails:any[];
  productForm: FormGroup;
  subdetails1:any[];
  constructor(private fb:FormBuilder,private service:SuballocserviceService,private router:Router,private service1:StaffdetailsService) { 
     
    this.productForm = this.fb.group({
      quantities: this.fb.array([]) ,
    });
    this.staffvar=new staffsub("","","","","","","");

    this.suballocform=this.fb.group({
      batch:[''],
      sem:[''],
      dept:[''],
      section:['']
    });
    this.suballocform1=this.fb.group({
      subcode:[''],
      subname:[''],
      staffid:['']
    });

    this.form1 = this.fb.group({
      items: this.fb.array([ this.suballocform1 ])
    });
   
   
  }
  
  quantities() : FormArray {
    return this.productForm.get("quantities") as FormArray
  }
   
  newQuantity(): FormGroup {
    return this.fb.group({
      subcode:[''],
      subname:[''],
      staffid:['']
    })
  }
      
  onSubmit() {
    console.log(this.productForm.value['quantities'].length)
    for(let j=0;j<this.productForm.value['quantities'].length;j++)
    {
    this.staffvar.subcode=this.productForm.value['quantities'][j].subcode;
    this.staffvar.staffid=this.productForm.value['quantities'][j].staffid.slice(0,5);
    this.staffvar.dept=this.suballocform.get('dept').value
    this.staffvar.sec=this.suballocform.get('section').value;
    this.staffvar.batch=this.suballocform.get('batch').value;
    this.staffvar.sem=this.suballocform.get('sem').value;
   this.service.putstaffdetails(this.staffvar).subscribe(
     data=>{
       console.log(data);
     }
   )
    }
    // console.log(this.productForm.value['quantities'][1].staffid);
    this.router.navigate(['adminhome']);
  }
  ngOnInit():void
  {
    this.service1.getAllStaffs().subscribe(
      data=>{
        // console.log(data[0]);
        for(let i=0;i<data.length;i++)
        this.userData.push(data[i])
      console.log(this.userData);
      }
  
    )
    
    // for (let i = 0; i < 6; i++)
    // {
    //   this.quantities().push(this.newQuantity());
    // }
    
  }
  length:number;
  submitform()
  {
    this.invalid=true;
    this.subdetails=new Array();
this.service.getSubjects(this.suballocform.get('sem').value,this.suballocform.get('dept').value).subscribe(
  data=>
  {this.subdetails.push(data)
    
    console.log(this.subdetails[0])
    for(let i=0;i<this.subdetails[0].length;i++)
    {
      this.quantities().push(this.fb.group({
        subcode:this.subdetails[0][i].subcode,
        subname:this.subdetails[0][i].subname,
        staffid:[''],
      }));
    }
    }

  
)
console.log(this.subdetails);
  }
submitdetails(subs,staffid)
{
//  this.staffvar.subcode=subs.subcode;
 this.staffvar.subcode=subs.subcode;
 this.staffvar.staffid=staffid;
 this.staffvar.dept=this.suballocform.get('dept').value
 this.staffvar.sec=this.suballocform.get('section').value;
 this.staffvar.batch=this.suballocform.get('batch').value;
 this.staffvar.sem=this.suballocform.get('sem').value;
this.service.putstaffdetails(this.staffvar).subscribe(
  data=>{
    console.log(data);
  }
)
}
submitdet()
{



console.log(this.suballocform1.value);
}
}
