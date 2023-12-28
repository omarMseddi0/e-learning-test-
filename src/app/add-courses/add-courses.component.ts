import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CoursesServicesService } from '../courses-services.service';
import { Item } from '../Item';

@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.css']
})
export class AddCoursesComponent implements OnInit {
  addForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private coursesService: CoursesServicesService
  ) {
    this.addForm = this.formBuilder.group({
      imagePath: ['', Validators.required],
      title: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.coursesService.createItem(this.addForm.value).subscribe(
      data => {
        this.router.navigate(['/list-courses']);
      },
      error => {
        alert(error);
      }
    );
  }
}
