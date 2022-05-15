import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentsDetailsComponent } from './students-details/students-details.component';


const routes: Routes = [
  {path:'', component:StudentsDetailsComponent},
  {path:'home', component:StudentsDetailsComponent},
  { path:'AddStudent', component: StudentFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
