import { Injectable } from '@angular/core';
import { StudentDetail } from './student-detail.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentDetailService {

  constructor(private http:HttpClient) {}
   readonly baseUrl='http://localhost:47623/api/StudentDetail'
  // readonly baseUrl='http://localhost:8081/student'
   FormData : StudentDetail = new StudentDetail();
     list : StudentDetail[];
     student:StudentDetail;
  postStudent(){
   return this.http.post(this.baseUrl,this.FormData);
  }
  putStudent(){
    return this.http.put(`${this.baseUrl}/${this.FormData.studentId}`,this.FormData);
   }
   deleteStudent(id : number){
    return this.http.delete(`${this.baseUrl}/${id}`);
   }
 
   refreshlist()  {
  
    this.http.get<any>(this.baseUrl)
    .toPromise()
    .then(res => this.list = res as StudentDetail[]);

    }

      
  }



function $filter(arg0: string) {
  throw new Error('Function not implemented.');
}

