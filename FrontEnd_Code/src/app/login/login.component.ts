import { User } from './../users';
import { AuthenticationService } from './../services/authentication.service';
import { ProfileComponent } from './../profile/profile.component';
import { first } from 'rxjs/operators';
import { filter } from 'rxjs/operators'
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup;
  selectedOption: String;
  invalidlogin:Boolean=false;
  userloggedin:User;
  constructor(private fb: FormBuilder,private router:Router,private service:AuthenticationService) {
    this.userloggedin=new User(0,'','','','','','','','',0,'','','','','');
    this.loginform = this.fb.group({
    rollno: ['', [Validators.required,Validators.minLength(1), Validators.email]],
    password: ['', Validators.required],
    });
    }
  ngOnInit(){
  }
  changeWebsite(e) {
    this.selectedOption=e.target.value;
  }
login()
{ 
  // console.log(this.selectedOption);
if(this.selectedOption==="admin")
{
if(this.loginform.get('rollno').value==="admin" && this.loginform.get('password').value==="admin")
{
  sessionStorage.setItem('username',this.loginform.get('rollno').value);
this.router.navigate(['adminhome']);
}
else{
  this.invalidlogin=true;
}
}
else if(this.selectedOption==="user")
{
  // console.log(this.loginform.get('rollno').value);
  this.service.authenticate(this.loginform.get('rollno').value).subscribe(
    data=>{
      if(data===null)
      {
        this.invalidlogin=true;
      }
      else{
      if(data.password===this.loginform.get('password').value){
        sessionStorage.setItem('username',this.loginform.get('rollno').value);
     this.router.navigate(['userhome',this.loginform.get('rollno').value]);
     this.invalidlogin=false;
      }
      else{
        this.invalidlogin=true;
      }
    }
  }
  );
  
    

  
  // if(this.service.authenticate(this.loginform.get('email').value,this.loginform.get('password').value))
  //   this.router.navigate(['userhome',loginform.value.email]);
  // else
  // alert('wrong username or password');
}
else if(this.selectedOption==="staff")
{
  this.service.authenticatestaff(this.loginform.get('rollno').value).subscribe(
    data=>{
      if(data===null)
      {
        this.invalidlogin=true;
      }
      else{
      if(data.password===this.loginform.get('password').value){
        sessionStorage.setItem('username',this.loginform.get('rollno').value);
     this.router.navigate(['staffhome']);
     this.invalidlogin=false;
      }
      else{
        this.invalidlogin=true;
      }
    }
    }
  )
}
}

}
