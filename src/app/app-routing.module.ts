import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LectureListComponent } from "./lecture-list/lecture-list.component";
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: "", redirectTo: "lectures", pathMatch: "full" },
  { path: "lectures", component: LectureListComponent },
  { path: "dashboard", component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
