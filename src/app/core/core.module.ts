import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectionService } from './service/connection.service';
import { mockUserProvider } from './service/mock-user';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule
  ],
  declarations: [],
  exports: [],
  providers: [ConnectionService, mockUserProvider, MockBackend, BaseRequestOptions, AuthGuard]
})
export class CoreModule { }
