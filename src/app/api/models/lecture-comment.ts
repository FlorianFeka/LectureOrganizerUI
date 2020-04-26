/* tslint:disable */
import { Lecture } from './lecture';
import { User } from './user';
export interface LectureComment {
  lecture?: Lecture;
  lectureCommentId: number;
  lectureId: number;
  text: string;
  user?: User;
  userId: number;
}
