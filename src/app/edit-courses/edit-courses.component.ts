import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesServicesService } from '../courses-services.service';
import { Item } from '../Item';

@Component({
  selector: 'app-edit-courses',
  templateUrl: './edit-courses.component.html',
  styleUrls: ['./edit-courses.component.css']
})
export class EditCoursesComponent implements OnInit {
  editForm: any;
  item_id: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private coursesService: CoursesServicesService,
    private url: ActivatedRoute
  ) {
    this.editForm = this.formBuilder.group({
      id: [],
      imagePath: ['', Validators.required],
      title: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.item_id = this.url.snapshot.params['id'];
    if (this.item_id > 0) {
      this.coursesService.getItem(this.item_id).subscribe((data: any) => {
        this.editForm.patchValue(data);
      });
    }
  }

  onSubmit() {
    this.coursesService.updateItem(this.item_id, this.editForm.value).subscribe(
      (data: any) => {
        this.router.navigate(['/list-courses']);
      },
      error => {
        alert(error);
      }
    );
  }
}
