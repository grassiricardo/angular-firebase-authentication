import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from "angularfire2/database";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: { '[@moveIn]': '' }
})
export class MembersComponent implements OnInit {
  state: string = '';
  displayName: any;

  constructor(public af: AngularFireAuth, private router: Router, private db: AngularFireDatabase) {
    this.af.authState.subscribe(user => {
      if (!user) {
        this.displayName = null;
        return;
      }
      this.displayName = user.email;
    });
  }

  ngOnInit() {
  }

  logout() {
    this.af.auth.signOut();
    this.router.navigateByUrl('/login');
  }
}
