import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { CreateUser } from 'src/app/store/user.actions';
import { RegisterErrorStateMatcher } from './RegisterErrorStateMatcher';

@Component({
  selector: 'lecture-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  passwordHide = true;
  repeatPasswordHide = true;

  matcher = new RegisterErrorStateMatcher();

  userRegisterForm = this.fb.group(
    {
      username: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      repeatEmail: [null, Validators.required],
      password: [null, Validators.required],
      repeatPassword: [null, Validators.required]
    },
    { validators: [this.checkEmail, this.checkPassword] }
  );

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.userRegisterForm.valid) {
      this.store.dispatch(new CreateUser(this.userRegisterForm.value));
    }
  }

  checkPassword(group: FormGroup) {
    const password = group.get('password').value;
    const repeatPassword = group.get('repeatPassword').value;

    return password === repeatPassword ? null : { notSamePassword: true };
  }

  checkEmail(group: FormGroup) {
    const email = group.get('email').value;
    const repeatEmail = group.get('repeatEmail').value;

    return email === repeatEmail ? null : { notSameEmail: true };
  }
}
