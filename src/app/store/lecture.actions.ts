import { Lecture } from 'src/api';

export class GetLectures {
  static readonly type = '[Lecture] Get Lectures';
}

export class CreateLecture {
  static readonly type = '[Lecture] Create Lecture';
  constructor(public lecture: Lecture) {}
}
