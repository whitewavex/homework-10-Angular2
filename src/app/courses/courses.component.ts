import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CoursesService]
})
export class CoursesComponent implements OnInit {

  courses = this.ts.getCourses();

  constructor(
    private ts:CoursesService
  ) { }

  ngOnInit() {
  }

}
