import { User } from './../users';
import { ProfilesService } from './../services/profiles.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  details:User;
  constructor(private profservice:ProfilesService) {
    this.details=new User(0,'','','','','','','','',0,'','','','','');
    this.profservice.getStudentDetails(sessionStorage.getItem('username')).subscribe(
      data =>{
        // console.log(data);
        this.details=data;
        console.log(this.details);
      }
    )
  
  }

  ngOnInit(): void {
    
  }

}
