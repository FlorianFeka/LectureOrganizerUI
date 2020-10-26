import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Lecture } from 'src/api';
import { LectureState } from 'src/app/store/lecture.state';

import { GetLectures } from '../../../../store/lecture.actions';

@Component({
  selector: 'lecture-list',
  templateUrl: './lecture-list.component.html',
  styleUrls: ['./lecture-list.component.css']
})
export class LectureListComponent implements OnInit {
  lectures$: Observable<Lecture[]>;
  displayedColumns: string[] = ['name', 'study', 'subject', 'professor', 'uni'];
  constructor(private store: Store) {
    this.store.dispatch(GetLectures);
    this.lectures$ = this.store.select(LectureState.lectures);
  }

  ngOnInit(): void {}
}
