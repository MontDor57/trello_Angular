import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { TaskService } from '../services/tasks.service';

@Component({
  selector: 'app-drag-list',
  templateUrl: './drag-list.component.html',
  styleUrls: ['./drag-list.component.scss']
})
export class DragListComponent implements OnInit {

  board: any[]
  editTitle = false

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.board = this.taskService.tasks
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
