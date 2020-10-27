export * from './lecture.service';
import { LectureService } from './lecture.service';
export * from './user.service';
import { UserService } from './user.service';
export const APIS = [LectureService, UserService];
