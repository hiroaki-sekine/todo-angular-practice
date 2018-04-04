import { Component, OnInit } from "@angular/core";
import { TodoService } from "../todo.service";
import { Todo } from "../todo";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.getTodos();
  }

  /**
   * get todos from api.
   * @returns void
   */
  getTodos(): void {
    this.todoService.getTodoes().subscribe(todos => (this.todos = todos));
  }

  /**
   * save todo.
   */
  saveTodo(todo: Todo) {
    this.todoService.updateTodo(todo).subscribe(res => {
      this.getTodos();
    });
  }

  /**
   * add an empty todo.
   * @returns void
   */
  addTodo(): void {
    this.todoService.addTodo(new Todo()).subscribe(res => {
      this.getTodos();
    });
  }

  /**
   * delete todo.
   */
  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo).subscribe(res => {
      this.getTodos();
    });
  }

  doneTodo(todo: Todo) {
    this.todoService.doneTodo(todo).subscribe(res => {
      this.getTodos();
    });
  }

  undoneTodo(todo: Todo) {
    this.todoService.undoneTodo(todo).subscribe(res => {
      this.getTodos();
    });
  }

    /**
   * star todo.
   */
  starTodo(todo: Todo) {
    this.todoService.starTodo(todo).subscribe((res) => {
      this.getTodos();
    });
  }

  /**
   * unstar todo.
   */
  unstarTodo(todo: Todo) {
    this.todoService.unstarTodo(todo).subscribe((res) => {
      this.getTodos();
    });
  }
}
