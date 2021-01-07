import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssignToCourseComponent } from './assign/assign-to-course/assign-to-course.component'
const routes: Routes = [
  {
		path: '',
		component: AssignToCourseComponent,
		data: {}
	},
	{
		path: 'assign',
		component: AssignToCourseComponent,
		data: {}
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
