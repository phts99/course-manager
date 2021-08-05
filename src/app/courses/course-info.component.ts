import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit {

    course!: Course;

    constructor (private activatedRoute: ActivatedRoute, private courseService: CourseService) {}

    ngOnInit(): void {
        // non-null assertion operator -> ! at the end of the method operation
        // assures the ts compiler that the outcome will not be null even though it seems like it could be
        this.course = this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')!);
    }

    save(): void {
        this.courseService.save(this.course);
    }
}