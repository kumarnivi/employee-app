import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LeaveModelComponent } from './components/leave-model/leave-model.component';
import { NavsideComponent } from './admin/navside/navside.component';
import { LeavesComponent } from './components/leaves/leaves.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'model', component:LeaveModelComponent},
  { path: 'admin', component:NavsideComponent},
  { path: 'leaves', component:LeavesComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
