import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FirebaseConnectionService } from './service/firebase.connection.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NavComponent],
  exports: [NavComponent],
  providers: [FirebaseConnectionService]
})
export class CoreModule { }
