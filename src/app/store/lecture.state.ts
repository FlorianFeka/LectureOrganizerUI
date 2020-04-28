import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { GetLectures, CreateLecture } from './lecture.actions';
import { Lecture, LecturesService, ApiModule } from 'src/api';

export interface LectureStateModel {
  lectures: Lecture[];
}

@State<LectureStateModel>({
  name: 'lectures',
  defaults: {
    lectures: []
  }
})
@Injectable()
export class LectureState {
  constructor(private lectureService: LecturesService) {}
  @Selector()
  static lectures(state: LectureStateModel) {
    return [...state.lectures];
  }

  @Action(GetLectures)
  getLectures({ setState }: StateContext<LectureStateModel>) {
    this.lectureService.lecturesGetLectures().subscribe((data) => {
      setState({
        lectures: data
      });
    });
  }

  @Action(CreateLecture)
  createLecture(ctx: StateContext<LectureState>, { lecture }: CreateLecture) {
    this.lectureService.lecturesPostLecture(lecture).subscribe();
  }
}
