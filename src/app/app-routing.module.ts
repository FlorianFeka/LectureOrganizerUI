import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LectureListComponent } from './module/lecture/page/lecture-list/lecture-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'lecture/list', pathMatch: 'full' },
  { path: 'lecture/list', component: LectureListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
