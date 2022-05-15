import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StudentDetailService } from 'src/app/shared/student-detail.service';
import { StudentDetail } from '../shared/student-detail.model';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.css']
})
export class StudentsDetailsComponent implements OnInit {

  searchText;
constructor(public service: StudentDetailService,private http:HttpClient,private toastr:ToastrService) { }
// list : StudentDetail[];


  ngOnInit(): void {
   this.service.refreshlist(); 
      //  this.service.getData();
  }
 

  populateForm(selectedRecord : StudentDetail){
    this.service.FormData = Object.assign({},selectedRecord);
    //  this.service.FormData=selectedRecord;
  }

  onDelete(id : number){
    if(
      confirm('Are You Sure For Deleting')
    ){
this.service.deleteStudent(id).subscribe(
  res =>{

    this.service.refreshlist();
    this.toastr.error("deleted successfully")
  },
  err =>{
    this.toastr.error("Can't be Deleted")
    console.log(err)
  }
)
}
}
 
 
}
