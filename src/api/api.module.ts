import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { LectureService } from './api/lecture.service';
import { LectureCommentService } from './api/lectureComment.service';
import { UniService } from './api/uni.service';
import { UserService } from './api/user.service';

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [LectureService, LectureCommentService, UniService, UserService]
})
export class ApiModule {
  public static forRoot(
    configurationFactory: (...args: any[]) => Configuration,
    deps?: any[]
  ): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [{ provide: Configuration, useFactory: configurationFactory, deps }]
    };
  }

  constructor(
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error(
        'You need to import the HttpClientModule in your AppModule! \n' +
          'See also https://github.com/angular/angular/issues/20575'
      );
    }
  }
}
