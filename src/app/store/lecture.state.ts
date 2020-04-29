import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Lecture, LecturesService } from 'src/api';

import { CreateLecture, GetLectures, GetOneLecture } from './lecture.actions';

export interface LectureStateModel {
  lectures: Lecture[];
  currentLecture: Lecture;
}

@State<LectureStateModel>({
  name: 'lectures',
  defaults: {
    lectures: [],
    currentLecture: null
  }
})
@Injectable()
export class LectureState {
  constructor(private lectureService: LecturesService) {}
  @Selector()
  static lectures(state: LectureStateModel) {
    return [...state.lectures];
  }

  @Selector()
  static lecture(state: LectureStateModel) {
    return state.currentLecture;
  }

  @Action(GetLectures)
  getLectures({ patchState }: StateContext<LectureStateModel>) {
    this.lectureService.lecturesGetLectures().subscribe((data) => {
      patchState({
        lectures: data
      });
    });
  }

  @Action(GetOneLecture)
  getOneLecture(ctx: StateContext<LectureStateModel>, payoad: GetOneLecture) {
    console.log(payoad);
    console.log(payoad.lectureId);

    this.lectureService
      .lecturesGetLecture(payoad.lectureId)
      .subscribe((data) => {
        console.log(data);

        ctx.patchState({
          currentLecture: data
        });
      });
  }

  @Action(CreateLecture)
  createLecture(
    ctx: StateContext<LectureStateModel>,
    { lecture }: CreateLecture
  ) {
    this.lectureService.lecturesPostLecture(lecture).subscribe();
  }
}
