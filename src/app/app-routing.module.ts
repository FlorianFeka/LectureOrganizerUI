import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LectureCreateComponent } from './module/lecture/page/lecture-create/lecture-create.component';
import { LectureListComponent } from './module/lecture/page/lecture-list/lecture-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'lecture/list', pathMatch: 'full' },
  { path: 'lecture/list', component: LectureListComponent },
  { path: 'lecture/create', component: LectureCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
