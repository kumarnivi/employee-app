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
import { NavsideComponent } from './admin/navside/navside.component';
import { GraphComponent } from './admin/graph/graph.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
// import { CanvasJSAngularStockChartsModule } from '@canvasjs/angular-stockcharts';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddSubadminComponent } from './admin/add-subadmin/add-subadmin.component';
import { LeavesComponent } from './components/leaves/leaves.component';

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
    LeaveRequestConfirmModalComponent,
    NavsideComponent,
    GraphComponent,
    AdminSidebarComponent,
    AddSubadminComponent,
    LeavesComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    CanvasJSAngularChartsModule,
    NgbModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
