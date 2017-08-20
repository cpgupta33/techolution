import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './share/pagenotfound/pagenotfound.component' ;
import { SuccessComponent } from './share/success/success.component' ;
import { AuthGuard } from './core/guard/auth.guard';

const appRoutes: Routes  = [
    { path : '', redirectTo: '/dashboard' , pathMatch: 'full'},
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
    { path: 'success', component: SuccessComponent, canActivate: [AuthGuard]},
    { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [RouterModule]
})
export class AppModuleRoute {}
