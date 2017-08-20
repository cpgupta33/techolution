import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './share/pagenotfound/pagenotfound.component' ;

const appRoutes: Routes  = [
    { path : '', redirectTo: '/dashboard' , pathMatch: 'full'},
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
    { path: 'about', loadChildren: './about/about.module#AboutModule'},
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
