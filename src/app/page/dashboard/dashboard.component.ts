import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Request } from '../../models/request';
import { RequestService } from 'src/app/service/request.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { RequestFormComponent } from 'src/app/elements/request-form/request-form.component';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isLoading = false;
  user: User;
  role: string;
  constructor(public userService : UserService, private router: Router) { }
 

  ngOnInit(): void {
  
    this.isLoading=true;

    this.userService.getUser(this.userService.getUserId())
    .subscribe(res =>{


      this.user = res as User;
      // this.role = this.user.role;
      
      this.isLoading=false;
     

    });




  }



  
}
