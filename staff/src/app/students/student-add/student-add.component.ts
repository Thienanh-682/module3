import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {StudentService} from '../../services/student.service';
import {Router} from '@angular/router';
import {IStudent} from '../../IStudent';
import {MessageService} from '../../services/message.service';
import {HttpResult} from '../../core/http-result';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent implements OnInit {
  addStudentForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    phone: ['', [Validators.required, Validators.minLength(4)]],
    address: ['', [Validators.required, Validators.minLength(4)]],
  });

  constructor(private fb: FormBuilder,
              private studentService: StudentService,
              private route: Router,
              private messageService: MessageService) {
  }

  ngOnInit() {
  }

  create() {
    const data = this.addStudentForm.value;
    this.studentService.add(data).subscribe((result: HttpResult) => {
      this.messageService.addMessage(result.message)
      return this.route.navigate(['/students']);
    });
  }

  get name() {
    return this.addStudentForm.get('name');
  }

  get phone() {
    return this.addStudentForm.get('phone');
  }

  get address() {
    return this.addStudentForm.get('address');
  }
}

