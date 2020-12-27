import { LectureComment } from 'src/api';

export class CreateLectureComment {
  static readonly type = '[LectureComment] Create Lecture Comment';
  constructor(public readonly comment: LectureComment) {}
}
