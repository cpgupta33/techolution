import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModuleRoute } from './dashboard.module.route';
import { FormsModule }    from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DashboardModuleRoute,
    FormsModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
