import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your components
import { BannerComponent } from './banner/banner.component';
import { AddCoursesComponent } from './add-courses/add-courses.component';
import { CoursesComponent } from './courses/courses.component';
import { EditCoursesComponent } from './edit-courses/edit-courses.component';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: BannerComponent, children: [
    { path: 'courses', component: CoursesComponent }
  ]}, 
  { path: 'login', component: LoginComponent },// The app will open with BannerComponent
  { path: 'add-courses', component: AddCoursesComponent },
  
  { path: 'courses', component: CoursesComponent },
  { path: 'edit-courses/:id', component: EditCoursesComponent },
  { path: 'list-courses', component: ListCoursesComponent , pathMatch: 'full' },
  // Add your other routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
