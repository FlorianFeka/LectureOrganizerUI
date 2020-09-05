import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LectureCreateComponent } from './module/lecture/page/lecture-create/lecture-create.component';
import { LectureDetailComponent } from './module/lecture/page/lecture-detail/lecture-detail.component';
import { LectureListComponent } from './module/lecture/page/lecture-list/lecture-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'lecture/list', pathMatch: 'full' },
  { path: 'lecture', redirectTo: 'lecture/list', pathMatch: 'full' },
  { path: 'lecture/list', component: LectureListComponent },
  { path: 'lecture/create', component: LectureCreateComponent },
  { path: 'lecture/detail/:id', component: LectureDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
