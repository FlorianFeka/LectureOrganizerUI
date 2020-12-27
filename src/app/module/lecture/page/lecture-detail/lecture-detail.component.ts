import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngxs/store';

import { Lecture } from '../../../../../api/model/lecture';
import { GetOneLecture } from '../../../../store/lecture.actions';
import { LectureState } from '../../../../store/lecture.state';

@Component({
  selector: 'lecture-lecture-detail',
  templateUrl: './lecture-detail.component.html',
  styleUrls: ['./lecture-detail.component.css']
})
export class LectureDetailComponent implements OnInit {
  lecture: Lecture;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const lectureId = params.get('id');
      this.store.dispatch(new GetOneLecture(lectureId));
    });
    this.store.select(LectureState.lecture).subscribe((data) => {
      this.lecture = data;
    });
  }

  addComment(comment: string) {
    console.log(comment);
  }
}
