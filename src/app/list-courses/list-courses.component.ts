import { Component } from '@angular/core';
import { Item } from '../Item';

import { CoursesServicesService } from '../courses-services.service';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent {
  items: Item[] = [];

  constructor(private CoursesServicesService: CoursesServicesService) { }

  ngOnInit() {
    this.CoursesServicesService.getItemList().subscribe(data => {
      this.items = data;
    });
  }

  deleteItem(item: Item) {
    this.CoursesServicesService.deleteItem(item.id).subscribe(data => {
      this.items = this.items.filter(u => u !== item);
    })
  }
}
