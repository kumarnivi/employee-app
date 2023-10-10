import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LeaveService {
  selectedType: string = 'Leavs';

  private apiUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) {}


  submitLeave(formData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/applyleave`, formData);
  }

  getLeaveRequests(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}api/records/:id`);
  }

  // getLeaveRequests(): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}api/getAllRecord`);
  // }

  
}
