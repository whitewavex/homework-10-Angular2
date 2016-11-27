import { Injectable } from '@angular/core';
import { Course } from './course';

@Injectable()
export class CoursesService {

  courses: Course[] = [
    {id: 1, name: 'Java', description: 'Обучение Java программированию', price: 8200},
    {id: 2, name: 'Front-End', description: 'Обучение HTML, CSS, Javascript', price: 5200},
    {id: 3, name: 'QA-тестирование', description: 'Профессия QA инженер', price: 6450},
    {id: 4, name: 'Android', description: 'Java на Android', price: 3650}
  ];

  getCourses(): Course[]{
    return this.courses;
  }

}
