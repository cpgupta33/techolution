import { Component, OnInit } from '@angular/core';
import { FirebaseConnectionService } from '../../core/service/firebase.connection.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public profilePic;
  constructor( private firebaseCon: FirebaseConnectionService) {}

  ngOnInit() {
     // this.firebaseCon.downloadUrl('profile/profile.jpg').then(value => this.profilePic = value);
     this.firebaseCon.downloadUrl('profile/profile.jpg').then((data) => {
        this.profilePic = data;
      }).catch((ex) => {
        console.error('Error fetching this.profilePic ', ex);
      });
  }
}
