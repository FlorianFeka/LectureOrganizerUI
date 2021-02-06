import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AuthenticateUser } from 'src/app/store/user.actions';

@Component({
  selector: 'lecture-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  passwordHide = true;

  userLoginForm = this.fb.group({
    username: [null, [Validators.required]],
    password: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.userLoginForm.valid) {
      this.store.dispatch(new AuthenticateUser(this.userLoginForm.value));
    }
  }
}
