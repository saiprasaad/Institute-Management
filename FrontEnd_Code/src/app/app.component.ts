import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pagename:String;
  value:Boolean;
  navbarCollapsed = true;
  userloggedin:Boolean=false;
  mySubscription: any;
  toggleNavbarCollapsing() {
      this.navbarCollapsed = !this.navbarCollapsed;
  }
  constructor(public service:AuthenticationService,private router:Router){
    
  this.pagename=this.constructor.name;
  
  // console.log(this.pagename);
  if(this.pagename==="AppComponent"){
  this.value=true;
console.log("true");  
}
  else{
  this.value=false;
  console.log("false");
  }

  }
ngOnInit()
{
  // this.router.navigate(['']);
  // location.reload();
  if(this.service.isuserloggedin())
  {
    this.userloggedin=true;
  }
}
}
