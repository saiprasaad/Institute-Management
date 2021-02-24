import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-usernav',
  templateUrl: './usernav.component.html',
  styleUrls: ['./usernav.component.css']
})

export class UsernavComponent implements OnInit {
  Rollno:string='';
  constructor() { }

  ngOnInit(): void {
    this.Rollno=sessionStorage.getItem('username');
  }

}
