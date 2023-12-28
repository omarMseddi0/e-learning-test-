import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { AddCoursesComponent } from './add-courses/add-courses.component';
import { EditCoursesComponent } from './edit-courses/edit-courses.component';
import { LoganeComponent } from './logane/logane.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppFooterComponent,
    BannerComponent,
    LoginComponent,
    CoursesComponent,
    ListCoursesComponent,
    AddCoursesComponent,
    EditCoursesComponent,
    LoganeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
