import { FeedbackcountComponent } from './feedbackcount/feedbackcount.component';
import { ViewfeedbackComponent } from './viewfeedback/viewfeedback.component';
import { SubmitfeedbackComponent } from './submitfeedback/submitfeedback.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { StaffdashboardComponent } from './staffdashboard/staffdashboard.component';
import { ViewstaffsComponent } from './viewstaffs/viewstaffs.component';
import { AddmarksComponent } from './addmarks/addmarks.component';
import { StaffhomeComponent } from './staffhome/staffhome.component';
import { ContactComponent } from './contact/contact.component';
import { AddsubjectsComponent } from './addsubjects/addsubjects.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { MarksdisplayComponent } from './marksdisplay/marksdisplay.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedbackcountadminComponent } from './feedbackcountadmin/feedbackcountadmin.component';
const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'home', component:HomeComponent },
  { path:'login', component:LoginComponent },
  { path:'register', component:RegisterComponent},
  { path:'addmarks', component:AddmarksComponent },
  { path:'profile', component:ProfileComponent},
  { path:'adminhome', component:AdminhomeComponent},
  { path:'marksdisplay', component:MarksdisplayComponent},
  { path:'suballoc', component:AddsubjectsComponent},
  { path:'staffhome', component:StaffhomeComponent},
  { path:'userhome/:name', component:UserhomeComponent},
  { path:'submitfeedback/:dept/:batch/:sem/:subcode/:subname', component:SubmitfeedbackComponent},
  { path:'feedbackcount/:dept/:batch/:sem/:subcode/:subname/:sec', component:FeedbackcountComponent},
  { path:'feedbackcountadmin/:dept/:batch/:sem/:subcode/:subname/:sec', component:FeedbackcountadminComponent},
  { path:'contact', component:ContactComponent},
  { path:'feedback', component:FeedbackComponent},
  { path:'viewfeedback',component:ViewfeedbackComponent},
  { path:'viewstaffalloc', component:ViewstaffsComponent},
  { path:'dashboard', component:StaffdashboardComponent},
  { path:'logout', component:LogoutComponent}
  // { path:'welcome/:name', component:WelcomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
