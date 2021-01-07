import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { CoursesService } from '../../services/courses.service';
import { CourseModel } from '../../common/models/CourseModel.model';


@Component({
  selector: 'assign-to-course',
  templateUrl: './assign-to-course.component.html',
  styleUrls: ['./assign-to-course.component.css']
})
export class AssignToCourseComponent implements OnInit {

  courses: CourseModel[];
  courseId: string = null;
  //
  inputValue: string = null;
  //
  existingUsersEmails: string[] = [];
  existingUsers: any[] = [];
  newUsersEmails: string[] = [];
  newUsers: any[] = [];
  createdUsers: any[] = [];
  //
  users:any[];
  // Added currentStep.
	// 1 = select course
	// 2 = course selected, select/add delecgates
  currentStep:number = 1;
  buttonDisabled: boolean = true;


	delegatesLoading:boolean = false;


  constructor(
    private usersService: UsersService,
    private coursesService: CoursesService
  ) { }

  ngOnInit(): void {
    this.coursesService.getCourses().subscribe({
      next: courses => this.courses = courses.courses
    });
    this.buttonDisabled = !this.validateForm();

  }

  onSelectCourse() {
		this.buttonDisabled = !this.validateForm();
		// increment step
    this.currentStep = 2;
    console.log(this.courseId)
  }

  onSearchInput(event: Event): void {
		const value = (event.target as HTMLInputElement).value;
		this.delegatesLoading = true;
    //
    this.usersService.getUsersBasic().subscribe({
      next: res => {
        console.log("Done")
        this.users = res.users;
        this.delegatesLoading = false;
      }
    });
    console.log(value)
  }

  onSearchSelected(user){
    console.log(user)
    this.addUser();
	}
  //
  addUser(em = null) {
    // TODO
  }
  //
  removeUser(user) {
    // TODO
  }
  //
  validateForm() {
    if (this.courseId === null) return false;
    if (this.existingUsersEmails.length < 1 && this.newUsers.length < 1) return false;
    if (this.newUsers.length < 1) return true;
    for (let user of this.newUsers) {
      if (user.EmailAddress.length < 1 || user.FirstName.length < 1 || user.LastName.length < 1) return false;
    }
    return true;
  }
}
