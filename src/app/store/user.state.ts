import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { LoginModel, AuthenticateService } from 'src/api';
import { CreateUser } from './user.actions';

export interface UserStateModel {
  user: LoginModel;
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
  static user(state: UserStateModel) {
    return state.user;
  }

  @Action(CreateUser)
  createUser(ctx: StateContext<UserStateModel>, { user }: CreateUser) {
    this.authService.authenticateRegister(user).subscribe();
  }
}
