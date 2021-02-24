import { MarksallocService } from './../services/marksalloc.service';
import { marks } from './../addmarks/addmarks.component';
import * as fileSaver from 'file-saver';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
export class getmarks{
  id:number;
  marks:number;
  subcode:string;
  staffid:string;
  subname:string;

  constructor(id,marks,subcode,staffid,subname)
  {
      this.id=id;
      this.marks=marks;
      this.subcode=subcode;
      this.staffid=staffid;
      this.subname=subname;
  }
} 
@Component({
  selector: 'app-marksdisplay',
  templateUrl: './marksdisplay.component.html',
  styleUrls: ['./marksdisplay.component.css']
})
export class MarksdisplayComponent implements OnInit {
  marks1:getmarks;
  testtype:string;
  sem:number;
  form1:FormGroup;
  isset:boolean=false;
  constructor(private fb:FormBuilder,private service:MarksallocService) {
    this.form1=fb.group({
      testtype:new FormControl(),
      sem:new FormControl()
    })
  }

 
  ngOnInit(): void {
  }
showmarks()
{
  this.isset=true;
  this.testtype=this.form1.get('testtype').value;
  this.sem=this.form1.get('sem').value;

  this.service.getMarks(sessionStorage.getItem('username'),this.testtype,this.sem).subscribe(
    data=>{
      this.marks1=data;
      console.log(data);
    }
  )
console.log('hello');
}

downloadpdf()
{
  this.service.donwloadmarkspdf().subscribe(
    x=>{
      const blob=new Blob([x],{type:'application/pdf'});
      if(window.navigator && window.navigator.msSaveOrOpenBlob)
      {
        window.navigator.msSaveOrOpenBlob(blob);
        return;
      }
      const data=window.URL.createObjectURL(blob);
      const link=document.createElement('a');
      link.href=data;
      link.download='marks.pdf';
      link.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true,view:window}));
      setTimeout(function() {
        window.URL.revokeObjectURL(data);
        link.remove();

      },100);
    }
  )
}
}
