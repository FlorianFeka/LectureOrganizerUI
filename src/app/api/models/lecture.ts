/* tslint:disable */
import { LectureComment } from './lecture-comment';
export interface Lecture {
  date: string;
  lectureComments?: Array<LectureComment>;
  lectureId: number;
  name: string;
  professor?: string;
  study?: string;
  subject?: string;
}
