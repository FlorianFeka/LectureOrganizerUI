import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LectureListComponent } from "./lecture-list/lecture-list.component";

const routes: Routes = [
  { path: "", redirectTo: "lectures", pathMatch: "full" },
  { path: "lectures", component: LectureListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
