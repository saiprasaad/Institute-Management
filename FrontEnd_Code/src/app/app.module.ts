import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { MarksdisplayComponent } from './marksdisplay/marksdisplay.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UsernavComponent } from './usernav/usernav.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { AddsubjectsComponent } from './addsubjects/addsubjects.component';
import { ContactComponent } from './contact/contact.component';
import { StaffhomeComponent } from './staffhome/staffhome.component';
import { AddmarksComponent } from './addmarks/addmarks.component';
import { ViewstaffsComponent } from './viewstaffs/viewstaffs.component';
import { Ng2CompleterModule } from "ng2-completer";
import { ChartsModule } from 'ng2-charts';
import { StaffdashboardComponent } from './staffdashboard/staffdashboard.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SubmitfeedbackComponent } from './submitfeedback/submitfeedback.component';
import { ViewfeedbackComponent } from './viewfeedback/viewfeedback.component';
import { FeedbackcountComponent } from './feedbackcount/feedbackcount.component';
import { FeedbackcountadminComponent } from './feedbackcountadmin/feedbackcountadmin.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    AdminhomeComponent,
    MarksdisplayComponent,
    UserhomeComponent,
    UsernavComponent,
    HomeComponent,
    LogoutComponent,
    AddsubjectsComponent,
    ContactComponent,
    StaffhomeComponent,
    AddmarksComponent,
    ViewstaffsComponent,
    StaffdashboardComponent,
    FeedbackComponent,
    SubmitfeedbackComponent,
    ViewfeedbackComponent,
    FeedbackcountComponent,
    FeedbackcountadminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2CompleterModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
