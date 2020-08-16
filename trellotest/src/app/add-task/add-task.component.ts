import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms'
import { TaskService } from '../services/tasks.service'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  @Input() indexOfCol: number;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  onSubmit (form: NgForm) {
    this.taskService.addTask(form.value.task, this.indexOfCol)
    form.reset()
  }

}
