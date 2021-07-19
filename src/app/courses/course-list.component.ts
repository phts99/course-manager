import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
//    selector: 'app-course-list', ** selector is now only used to reference this component in another component
//                                 ** component is now being referenced via routing
    templateUrl: './course-list.component.html',
})

export class CourseListComponent implements OnInit {

    _courses: Course[] = [];

    _filterBy!: string;

    filteredCourses: Course[] = [];

    constructor(private courseService: CourseService) { }

    ngOnInit(): void {
    
        this._courses = this.courseService.retrieveAll();
        this.filteredCourses = this._courses;
    }

    set filter(value: string) {
        this._filterBy = value;
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter() {
        return this._filterBy;
    }
}