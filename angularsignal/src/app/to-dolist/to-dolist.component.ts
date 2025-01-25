import { Component, computed, signal } from '@angular/core';

interface Todo {
  text: string;
}

@Component({
  selector: 'app-to-dolist',
  templateUrl: './to-dolist.component.html',
  styleUrl: './to-dolist.component.css'
})
export class ToDolistComponent {

  todos = signal<Todo[]>([]);
  newTask = '';

  totaltask = computed(() => this.todos().length);

  addtask(){
    if(this.newTask.trim()){
      this.todos.update(todos => [...todos,{ text: this.newTask.trim()}] );
      this.newTask = '';
    }
  }
  
}
