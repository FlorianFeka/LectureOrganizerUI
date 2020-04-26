import { State, Action, StateContext, Selector } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { GetLectures } from "./lecture.actions";
import { Lecture, LecturesService, ApiModule } from "src/api";

export interface LectureStateModel {
  lectures: Lecture[];
}

@State<LectureStateModel>({
  name: "lectures",
  defaults: {
    lectures: [],
  },
})
@Injectable()
export class LectureState {
  constructor(private lectureService: LecturesService) {}
  @Selector()
  static getTutorials(state: LectureStateModel) {
    return state.lectures;
  }

  @Action(GetLectures)
  get({ setState }: StateContext<LectureStateModel>) {
    this.lectureService.lecturesGetLectures().subscribe((data) => {
      console.log(data);
      setState({
        lectures: data,
      });
    });
  }
}
