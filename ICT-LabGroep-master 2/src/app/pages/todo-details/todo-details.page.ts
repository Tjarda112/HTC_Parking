import { Todo, TodoService } from '../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
 
@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.page.html',
  styleUrls: ['./todo-details.page.scss'],
})
export class TodoDetailsPage implements OnInit {
  [x: string]: any;
 
  todo: Todo = {
    description: '',
    createdAt: new Date().getTime(),
    price: null,
    productId: '',
    specification: '',
    stock: '',
    levertijd: null,
  };
 
  todoId:  null;
  navCtrl: any;
 
  constructor(private route: ActivatedRoute, private nav: NavController,
     private todoService: TodoService, private loadingController: LoadingController, private router: Router) { }
 
  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
    if (this.todoId)  {
      this.loadTodo();
    }
  }
 
  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Loading Todo..'
    });
    await loading.present();
 
    this.todoService.getTodo(this.todoId).subscribe(res => {
      loading.dismiss();
      this.todo = res;
    });
  }
 
  async saveTodo() {
 
    const loading = await this.loadingController.create({
      message: 'Saving Todo..'
    });
    await loading.present();
 
    if (this.todoId) {
      this.todoService.updateTodo(this.todo, this.todoId).then(() => {
        loading.dismiss();
        this.router.navigateByUrl('/upload');

      });
    } else {
      this.todoService.addTodo(this.todo).then(() => {
        loading.dismiss();
        this.router.navigateByUrl('/upload');

      });
    }
  }
}