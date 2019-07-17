import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../../services/product.service';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {
  todos: Todo[];
 
  constructor(private todoService: TodoService, private firestore: AngularFirestore) { }
 
  search(event)
  {

  }
  ngOnInit() {
    this.todoService.getTodos().subscribe(data => {
      this.todos = data;
    });
  }

  remove(item) {
    this.todoService.removeTodo(item.id);
  }
}
