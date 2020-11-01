export * from './lecture.service';
import { LectureService } from './lecture.service';
export * from './lectureComment.service';
import { LectureCommentService } from './lectureComment.service';
export * from './uni.service';
import { UniService } from './uni.service';
export * from './user.service';
import { UserService } from './user.service';
export const APIS = [LectureService, LectureCommentService, UniService, UserService];
