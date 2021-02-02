export * from './authenticate.service';
import { AuthenticateService } from './authenticate.service';
export * from './lecture.service';
import { LectureService } from './lecture.service';
export * from './uni.service';
import { UniService } from './uni.service';
export const APIS = [AuthenticateService, LectureService, UniService];
