import { Component, OnInit } from '@angular/core';
import { FirebaseConnectionService } from '../service/firebase.connection.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public isCollapsed = true;
  constructor( private firebase: FirebaseConnectionService) { }

  ngOnInit() {

  }

  public downloadCV() {
    const url: any = this.firebase.downloadUrl('resume/ChandraGupta_UIDeveloper_Doc.doc').then((data) => {
        window.location.href =  data;
      }).catch((ex) => {
        console.error('Error fetching this.profilePic ', ex);
      });
  }
}
