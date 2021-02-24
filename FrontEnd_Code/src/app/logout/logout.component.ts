import { AuthenticationService } from './../services/authentication.service';
import { Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private service:AuthenticationService,private route:Router) {
   service.logout();
    setTimeout(function(){ route.navigate(['login']) }, 3000);
    // setInterval(route.navigate(['home']),1000);
   }

  ngOnInit(): void {
  }

}
