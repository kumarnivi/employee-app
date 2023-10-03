import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LeaveAllocationComponent } from './components/leave-allocation/leave-allocation.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LeaverequestComponent } from './components/leaverequest/leaverequest.component';
import { FormsModule } from '@angular/forms';
import { LeaveModelComponent } from './components/leave-model/leave-model.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { CalendarModule,DateAdapter } from 'angular-calendar'; 
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { LeaveRequestConfirmModalComponent } from './components/leave-request-confirm-modal/leave-request-confirm-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    LeaveAllocationComponent,
    NavbarComponent,
    LeaverequestComponent,
    LeaveModelComponent,
    DatePickerComponent,
    LeaveRequestConfirmModalComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
