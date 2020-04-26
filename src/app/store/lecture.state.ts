import { State, Action, StateContext } from "@ngxs/store";
import { Lecture } from "../api/models";
import { Injectable } from "@angular/core";
import { GetLectures } from "./lecture.actions";
import { LecturesService } from '../api/services';

export interface LectureStateModel {
  lectures: Lecture[];
}

@State<LectureStateModel>({
  name: "Lecture",
})
@Injectable()
export class LectureStateModel {
  @Action(GetLectures)
  getLectures(ctx: StateContext<LectureStateModel>) {
    const state = ctx.getState();
    const lectures = 
  }
}
