/* tslint:disable */
import { LectureComment } from './lecture-comment';
export interface User {
  email: string;
  lectureComments?: Array<LectureComment>;
  password: string;
  userId: number;
  username: string;
}
