import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StudentListComponent} from '../students/student-list/student-list.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {StudentAddComponent} from '../students/student-add/student-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import {StudentEditComponent} from '../students/student-edit/student-edit.component';


const routes: Routes = [
  {path: '', component: StudentListComponent},
  {path: 'create', component: StudentAddComponent},
  {path: ':id/edit', component: StudentEditComponent},
];
@NgModule({
  declarations: [StudentListComponent, StudentAddComponent, StudentEditComponent],
  exports: [
    StudentListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }
