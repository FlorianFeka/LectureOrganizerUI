import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { CreateLecture } from 'src/app/store/lecture.actions';

@Component({
  selector: 'lecture-lecture-create',
  templateUrl: './lecture-create.component.html',
  styleUrls: ['./lecture-create.component.css']
})
export class LectureCreateComponent {
  lectureForm = this.fb.group({
    name: [null, Validators.required],
    subject: [null, Validators.required],
    study: [null, Validators.required],
    professor: [null, Validators.required],
    date: [null, Validators.required]
  });
  constructor(private fb: FormBuilder, private store: Store) {}

  onSubmit() {
    if (this.lectureForm.valid) {
      this.store.dispatch(new CreateLecture(this.lectureForm.value));
    }
  }
}
