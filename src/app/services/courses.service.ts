import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { CourseModel } from "../common/models/CourseModel.model"

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }
  // FAKE STATIC CALL
	getCourses() : Observable<any> {
		let courses : CourseModel[] = [
			{id:"01",name:"course 1"},
			{id:"02",name:"course 2"},
		];;
		return Observable.create( observer => {
				observer.next({ courses });
				observer.complete();
		});}


}
