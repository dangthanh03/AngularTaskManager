import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  imports: [SharedModule, FormsModule, DatePipe],
  exports: [TasksComponent],
})
export class TasksModule {}
