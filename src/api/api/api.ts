export * from './lectures.service';
import { LecturesService } from './lectures.service';
export * from './users.service';
import { UsersService } from './users.service';
export const APIS = [LecturesService, UsersService];
