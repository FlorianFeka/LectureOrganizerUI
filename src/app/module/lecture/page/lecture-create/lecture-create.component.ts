import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'lecture-lecture-create',
  templateUrl: './lecture-create.component.html',
  styleUrls: ['./lecture-create.component.css']
})
export class LectureCreateComponent {
  addressForm = this.fb.group({
    name: [null, Validators.required],
    subject: [null, Validators.required],
    study: [null, Validators.required],
    professor: [null, Validators.required],
    date: null
  });
  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Thanks!');
  }
}
