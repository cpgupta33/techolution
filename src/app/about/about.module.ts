import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { AboutModuleRoute } from './about.module.route';

@NgModule({
  imports: [
    CommonModule,
    AboutModuleRoute
  ],
  declarations: [AboutComponent],
  exports: [ AboutComponent ]
})
export class AboutModule { }
