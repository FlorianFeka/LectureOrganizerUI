import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Uni } from 'src/api';
import { CreateLecture } from 'src/app/store/lecture.actions';
import { GetUnis } from 'src/app/store/uni.actions';
import { UniState } from '../../../../store/uni.state';

@Component({
  selector: 'lecture-lecture-create',
  templateUrl: './lecture-create.component.html',
  styleUrls: ['./lecture-create.component.css']
})
export class LectureCreateComponent implements OnInit {
  unis$: Observable<Uni[]>;

  lectureForm = this.fb.group({
    name: [null, Validators.required],
    subject: [null, Validators.required],
    study: [null, Validators.required],
    professor: [null, Validators.required],
    uniId: [null, Validators.required],
    date: [null, Validators.required]
  });
  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new GetUnis());
    this.unis$ = this.store.select(UniState.unis);
  }

  onSubmit() {
    if (this.lectureForm.valid) {
      console.log(this.lectureForm.value);

      this.store.dispatch(new CreateLecture(this.lectureForm.value));
    }
  }
}
