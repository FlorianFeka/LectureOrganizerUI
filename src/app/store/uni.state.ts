import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Uni, UniService } from 'src/api';
import { GetUnis } from './uni.actions';

export interface UniStateModel {
  unis: Uni[];
}

@State<UniStateModel>({
  name: 'unis',
  defaults: {
    unis: []
  }
})
@Injectable()
export class UniState {
  constructor(private uniService: UniService) {}
  @Selector()
  static unis(state: UniStateModel) {
    return [...state.unis];
  }

  @Action(GetUnis)
  getUnis({ patchState }: StateContext<UniStateModel>) {
    this.uniService.uniGetUniAll().subscribe((data) => {
      patchState({
        unis: data
      });
    });
  }
}
