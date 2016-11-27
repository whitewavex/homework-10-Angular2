import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { AuthorsComponent } from './authors/authors.component';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    AuthorsComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
