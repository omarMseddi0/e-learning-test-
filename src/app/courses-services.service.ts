import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './Item';

@Injectable({
  providedIn: 'root'
})
export class CoursesServicesService {

  private baseUrl = 'http://localhost:2559/item';

  constructor(private http: HttpClient) { }

  getItemList(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.baseUrl}/`);
  }

  getItem(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.baseUrl}/${id}`);
  }

  createItem(item: Item): Observable<Object> {
    return this.http.post(`${this.baseUrl}/`, item);
  }

  updateItem(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
