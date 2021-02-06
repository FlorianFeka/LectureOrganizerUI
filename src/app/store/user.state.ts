import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AuthenticateService } from 'src/api';
import { AuthenticateUser, CreateUser } from './user.actions';

export class User {
  username: string;
  token: string;
}

export interface UserStateModel {
  user: User;
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    user: null
  }
})
@Injectable()
export class UserState {
  constructor(private authService: AuthenticateService) {}
  @Selector()
  static currentUser(state: UserStateModel) {
    return state.user;
  }

  @Action(CreateUser)
  createUser(ctx: StateContext<UserStateModel>, { user }: CreateUser) {
    this.authService.authenticateRegister(user).subscribe();
  }

  @Action(AuthenticateUser)
  authenticateUser(ctx: StateContext<UserStateModel>, { user }: AuthenticateUser) {
    this.authService.authenticateLogin(user).subscribe((data) => console.log(data));
  }
}
