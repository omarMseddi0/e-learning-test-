import { Component, OnInit } from '@angular/core';
import { Item } from '../Item';
import { CoursesServicesService } from '../courses-services.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  items: Item[] = [];

  constructor(private coursesService: CoursesServicesService) { }

  ngOnInit() {
    this.coursesService.getItemList().subscribe(data => {
      this.items = data;
    });
  }
}
