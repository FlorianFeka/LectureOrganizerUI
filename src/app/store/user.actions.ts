import { User } from 'src/api';

export class CreateUser {
  static readonly type = '[User] Post User';
  constructor(public readonly user: User) {}
}
