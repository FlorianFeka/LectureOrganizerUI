import { Component, OnInit } from "@angular/core";
import { Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { map, tap } from 'rxjs/operators';
import { Lecture } from 'src/api';
import { GetLectures } from 'src/app/store/lecture.actions';

@Component({
  selector: "app-lecture-list",
  templateUrl: "./lecture-list.component.html",
  styleUrls: ["./lecture-list.component.css"],
})
export class LectureListComponent implements OnInit {
  lectures$: Observable<Lecture[]>;
  displayedColumns: string[] = ['lectureId', 'name', 'subject', 'study', 'professor'];
  constructor(private store: Store) {
    this.store.dispatch(GetLectures);
    this.lectures$ = this.store.select((state) => state.lectures)
      .pipe(
        map((data) => {
          data.lectures.map(function (lecture, i, a) {
            delete lecture.lectureComments;
            return lecture;
          })
          return data.lectures
        })
      );
  }

  ngOnInit(): void { }
}
