import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatMenuModule } from "@angular/material/menu";
import { LectureListComponent } from "./lecture-list/lecture-list.component";
import { ApiModule } from "../api/api.module";
import { HttpClientModule } from "@angular/common/http";
import { NgxsModule } from "@ngxs/store";
import { LectureState } from "./store/lecture.state";

@NgModule({
  declarations: [AppComponent, LectureListComponent],
  imports: [
    NgxsModule.forRoot([LectureState]),
    ApiModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
