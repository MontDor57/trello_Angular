import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { TaskService } from '../services/tasks.service'

@Component({
  selector: 'app-add-col',
  templateUrl: './add-col.component.html',
  styleUrls: ['./add-col.component.scss']
})
export class AddColComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  onSubmit (form: NgForm) {
    console.log(form.value.title)
    this.taskService.addColumn(form.value.title)
    form.reset()
  }

}
