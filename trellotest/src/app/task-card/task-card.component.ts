import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms'
import { TaskService } from '../services/tasks.service'

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  @Input() taskName: string;
  @Input() indexOfTask: number;
  @Input() indexOfCol: number;

  editForm = false;
  tasks: any[];

  constructor( private taskService: TaskService ) { }

  ngOnInit(): void {
    this.tasks = this.taskService.tasks
  }

  onEditForm () {
    this.editForm = !this.editForm
  }

  onSubmit (form: NgForm) {
    this.taskService.editTask(form.value.editTask, this.indexOfTask, this.indexOfCol)
    this.editForm = false
  }

  onDelete () {
    this.taskService.deleteTask(this.indexOfTask, this.indexOfCol)
  }

}
