import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { User } from 'src/api';
import { CreateUser } from 'src/app/store/user.actions';

@Component({
  selector: 'lecture-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  passwordHide: boolean = true;
  repeatPasswordHide: boolean = true;

  userRegisterForm = this.fb.group({
    username: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    repeatEmail: [null, Validators.required],
    password: [null, Validators.required],
    repeatPassword: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.userRegisterForm.valid) {
      let user: User = {
        userId: null,
        username: this.userRegisterForm.value.username,
        email: this.userRegisterForm.value.email,
        password: this.userRegisterForm.value.password
      };

      this.store.dispatch(new CreateUser(this.userRegisterForm.value));
    }
  }
}
