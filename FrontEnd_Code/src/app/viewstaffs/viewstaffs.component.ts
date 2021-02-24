import { Router } from '@angular/router';
import { SuballocserviceService } from './../services/suballocservice.service';
import { staffsub } from './../addsubjects/addsubjects.component';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
export class viewstaffdet{
  subcode:string;
  subname:string;
  staffid:string;
  staffname:string;
  constructor(subcode,subname,staffid,staffname)
  {
    this.subcode=subcode;
    this.subname=subname;
    this.staffid=staffid;
    this.staffname=staffname;
  }
}
@Component({
  selector: 'app-viewstaffs',
  templateUrl: './viewstaffs.component.html',
  styleUrls: ['./viewstaffs.component.css']
})
export class ViewstaffsComponent implements OnInit {
  suballocform:FormGroup;
  subarray:FormGroup;
  suballocform1:FormGroup;
  staffvar:viewstaffdet;
  form1: FormGroup;
  invalid:Boolean=false;
  subdetails:any[];
  productForm: FormGroup;
  subdetails1:any[];
  constructor(private fb:FormBuilder,private service:SuballocserviceService,private router:Router) { 
     
    this.productForm = this.fb.group({
      quantities: this.fb.array([]) ,
    });
    this.staffvar=new viewstaffdet("","","","");

    this.suballocform=this.fb.group({
      batch:[''],
      sem:[''],
      dept:[''],
      sec:['']
    });
    this.suballocform1=this.fb.group({
      subcode:[''],
      subname:[''],
      staffid:[''],
      staffname:['']
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
      staffid:[''],
      staffname:['']
    })
  }
      
  onSubmit() {
    console.log(this.productForm.value['quantities'].length)
    for(let j=0;j<this.productForm.value['quantities'].length;j++)
    {
    this.staffvar.subcode=this.productForm.value['quantities'][j].subcode;
    this.staffvar.staffid=this.productForm.value['quantities'][j].staffid
    // this.staffvar.dept=this.suballocform.get('dept').value
    // this.staffvar.sec=this.suballocform.get('section').value;
    // this.staffvar.batch=this.suballocform.get('batch').value;
    // this.staffvar.sem=this.suballocform.get('sem').value;
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
    console.log(this.suballocform.get('sec').value);
    console.log(this.suballocform.get('sem').value);
    console.log(this.suballocform.get('batch').value);
    console.log(this.suballocform.get('dept').value);
this.service.getStaffdetails(this.suballocform.get('sem').value,this.suballocform.get('batch').value,this.suballocform.get('dept').value,this.suballocform.get('sec').value).subscribe(
  data=>
  {
    console.log(data);
    this.subdetails.push(data)
    
    console.log(this.subdetails[0])
    for(let i=0;i<this.subdetails[0].length;i++)
    {
      this.quantities().push(this.fb.group({
        subcode:this.subdetails[0][i].subcode,
        subname:this.subdetails[0][i].subname,
        staffid:this.subdetails[0][i].staffid,
        staffname:this.subdetails[0][i].staffname,
      }));
    }
    }

  
)
console.log(this.subdetails);
  }
// submitdetails(subs,staffid)
// {
// //  this.staffvar.subcode=subs.subcode;
//  this.staffvar.subcode=subs.subcode;
//  this.staffvar.staffid=staffid;
//  this.staffvar.dept=this.suballocform.get('dept').value
//  this.staffvar.sec=this.suballocform.get('section').value;
//  this.staffvar.batch=this.suballocform.get('batch').value;
//  this.staffvar.sem=this.suballocform.get('sem').value;
// this.service.putstaffdetails(this.staffvar).subscribe(
//   data=>{
//     console.log(data);
//   }
// )
// }
submitdet()
{



console.log(this.suballocform1.value);
}

}
