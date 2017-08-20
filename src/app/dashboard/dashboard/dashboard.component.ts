import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../core/service/connection.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  model: any = {};
  loading = false;
  public data = {};
  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private connectionService: ConnectionService) {}

  ngOnInit() {
  }

  login(){
    this.loading = true;
    this.connectionService.login(this.model.username, this.model.password)
    .subscribe(
      data => {
          this.router.navigate(['/success']);
      },
      error => {
          alert(error);
          this.loading = false;
      });
  }
}
