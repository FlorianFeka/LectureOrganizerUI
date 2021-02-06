import { LoginModel, RegisterModel } from 'src/api';

export class CreateUser {
  static readonly type = '[User] Create User';
  constructor(public readonly user: RegisterModel) {}
}

export class AuthenticateUser {
  static readonly type = '[User] Authenticate User';
  constructor(public readonly user: LoginModel) {}
}
