import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { StudentDetail } from 'src/app/shared/student-detail.model';
import { StudentDetailService } from 'src/app/shared/student-detail.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  ngForm:FormGroup=new FormGroup({});

  constructor(public service:StudentDetailService,private toastr:ToastrService,) { }
  searchText;
  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
if (this.service.FormData.studentId == 0)
this.insertStudent(form);
else
this.updatestudent(form);
  }
  insertStudent(form:NgForm){
    this.service.postStudent().subscribe(
      res=> {
    this.resetform(form);
    this.service.refreshlist();
    this.toastr.success('submitted sucessfully')
      },
      err =>{console.log(err);
        this.toastr.error('error submitting student')
      }
    );
  }
  updatestudent(form : NgForm){
    this.service.putStudent().subscribe(
      res=> {
    this.resetform(form);
    this.service.refreshlist();
    this.toastr.info('updated sucessfully');
    
      },
      err =>{console.log(err);
        this.toastr.error('error updating student');
        this.resetform(form)
      }
    );
  }
resetform(form:NgForm){
  form.form.reset();
  this.service.FormData= new StudentDetail();
}
onClick(form :NgForm){
  this.resetform(form);
}
}
