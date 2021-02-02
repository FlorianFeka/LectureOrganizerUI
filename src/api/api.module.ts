import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { AuthenticateService } from './api/authenticate.service';
import { LectureService } from './api/lecture.service';
import { UniService } from './api/uni.service';

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [AuthenticateService, LectureService, UniService]
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
