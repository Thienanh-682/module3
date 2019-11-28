import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StudentService} from '../../services/student.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IStudent} from '../../IStudent';
import {HttpResult} from '../../core/http-result';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent implements OnInit {
  updateStudentForm = this.fb.group({
    name: [''],
    phone: [''],
    address: [''],
  });
  index = +this.activateRoute.snapshot.paramMap.get('id');

  constructor(private studentService: StudentService,
              private activateRoute: ActivatedRoute,
              private fb: FormBuilder,
              private route: Router,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.studentService.findById(this.index).subscribe((result: IStudent) => {
      this.updateStudentForm = this.fb.group({
        name: [result.name , [Validators.required, Validators.minLength(4)]],
        phone: [result.phone, [Validators.required, Validators.minLength(4)]],
        address: [result.address, [Validators.required, Validators.minLength(4)]],
      });
    });

  }

  get name() {
    return this.updateStudentForm.get('name');
  }

  get phone() {
    return this.updateStudentForm.get('phone');
  }

  get address() {
    return this.updateStudentForm.get('address');
  }
  create() {
      const data = this.updateStudentForm.value;
      const id = this.index;
      this.studentService.edit(data, id).subscribe((result: HttpResult) => {
        this.messageService.addMessage(result.message);
        return  this.route.navigate(['/students']);
      });
    }

}
