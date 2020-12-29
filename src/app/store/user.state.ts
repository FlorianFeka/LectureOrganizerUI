import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { User, UserService } from 'src/api';
import { CreateUser } from './user.actions';

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
  constructor(private userService: UserService) {}
  @Selector()
  static user(state: UserStateModel) {
    return state.user;
  }

  @Action(CreateUser)
  createUser(ctx: StateContext<UserStateModel>, { user }: CreateUser) {
    this.userService.userPostUser(user).subscribe();
  }
}
