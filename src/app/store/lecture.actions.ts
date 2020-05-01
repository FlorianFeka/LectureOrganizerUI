import { Lecture } from 'src/api';

export class GetLectures {
  static readonly type = '[Lecture] Get Lectures';
}

export class GetOneLecture {
  static readonly type = '[Lecture] Get One Lecture';
  constructor(public readonly lectureId: string) {}
}

export class CreateLecture {
  static readonly type = '[Lecture] Create Lecture';
  constructor(public readonly lecture: Lecture) {}
}
