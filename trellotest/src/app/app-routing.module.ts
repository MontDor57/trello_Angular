import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragListComponent } from './drag-list/drag-list.component';


const routes: Routes = [
  {path: '', component: DragListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
