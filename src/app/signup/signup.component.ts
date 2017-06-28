import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class SignupComponent implements OnInit {

  state: string = '';
  error: any;

  constructor(public af: AngularFireAuth,private router: Router) { }

  ngOnInit() {
  }

  onSubmit(formData) {
    if(formData.valid) {
      this.af.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password)
        .then((success) => {
          this.router.navigate(['/login'])
        })
        .catch(function(er) {
          console.log(er)
          this.error = er.message;
        });
      }
  }
}
