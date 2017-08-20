import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PagenotfoundComponent, SuccessComponent],
  exports: [ PagenotfoundComponent]
})
export class ShareModule { }
