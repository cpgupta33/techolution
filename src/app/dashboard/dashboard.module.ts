import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModuleRoute } from './dashboard.module.route';
// import { FirebaseConnectionService } from '../core/service/firebase.connection.service';

@NgModule({
  imports: [
    CommonModule,
    DashboardModuleRoute
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
