import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LeaveModelComponent } from './components/leave-model/leave-model.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';


const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'model', component:LeaveModelComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
