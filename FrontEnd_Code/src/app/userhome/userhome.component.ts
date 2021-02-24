import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
name:String;
  constructor(private route:ActivatedRoute) { 
    this.name=this.route.snapshot.params['name'];
    
  }

  ngOnInit(): void {
  }

}
