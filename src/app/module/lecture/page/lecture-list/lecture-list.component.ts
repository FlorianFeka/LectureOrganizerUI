import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Lecture } from 'src/api';

import { GetLectures } from '../../../../store/lecture.actions';

@Component({
  selector: 'lecture-list',
  templateUrl: './lecture-list.component.html',
  styleUrls: ['./lecture-list.component.css']
})
export class LectureListComponent implements OnInit {
  lectures$: Observable<Lecture[]>;
  displayedColumns: string[] = [
    'lectureId',
    'name',
    'subject',
    'study',
    'professor'
  ];
  constructor(private store: Store) {
    this.store.dispatch(GetLectures);
    this.lectures$ = this.store
      .select((state) => state.lectures)
      .pipe(
        map((data) => {
          data.lectures.map((lecture) => {
            delete lecture.lectureComments;
            return lecture;
          });
          return data.lectures;
        })
      );
  }

  ngOnInit(): void {}
}
