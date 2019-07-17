/*  import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Todo } from '../../services/product.service';

import { UploadPage } from './upload.page';
import { TodoService } from 'src/services/product.service';
import { Observable } from 'rxjs';

describe('UploadPage', () => {
  let component: UploadPage;
  let service: TodoService;

  const todos: Todo[] = [
    {
  description: 'Test',
  price: 34,
  createdAt: 4334,
  productId: 'Test',
  specification: 'Testddd',
  stock: 'string',
  levertijd: 3
    }];

  spyOn(service, 'getTodos').and.callFake()) => {
    return Observable.from([todos]);
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component.todos).toEqual(todos);
  });
});
*/