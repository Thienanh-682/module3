import {Component, OnInit} from '@angular/core';
import {IStudent} from '../../IStudent';
import {StudentService} from '../../services/student.service';
import {Router} from '@angular/router';
import {MessageService} from '../../services/message.service';
import {HttpResult} from '../../core/http-result';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students: IStudent[] = [];
  message: string;

  constructor(private studentService: StudentService,
              private route: Router,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.studentService.getAll().subscribe((result: HttpResult) => {
      this.message = this.messageService.getMessage();
      this.students = result.data;
    });
  }

  delete(id) {
    if (confirm('Bạn có muốn xóa không ? ')) {
      this.studentService.delete(id).subscribe((result: HttpResult) => {
        this.messageService.addMessage(result.message);
        this.message = this.messageService.getMessage();
        return this.getAll();
      });
    }
  }
}
