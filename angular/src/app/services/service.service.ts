import {Injectable} from '@angular/core';
import {Iproduct} from '../Iproduct';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  productList: Iproduct[] = [
    {
      id: 1,
      name: 'hp450',
      price: 222222,
      image: 'assets/image/hp.jpeg',
      star: 4
    },
    {
      id: 2,
      name: 'hp451',
      price: 222222,
      image: 'assets/image/hp.jpeg',
      star: 3.5
    },
    {
      id: 3,
      name: 'hp452',
      price: 222222,
      image: 'assets/image/hp.jpeg',
      star: 4
    },
    {
      id: 4,
      name: 'hp453',
      price: 222222,
      image: 'assets/image/hp.jpeg',
      star: 5
    },
    {
      id: 5,
      name: 'hp454',
      price: 222222,
      image: 'assets/image/hp.jpeg',
      star: 2.5
    },
  ];

  constructor() {
  }

  getAll(): Iproduct[] {
    return this.productList;
  }

  delete(index) {
    this.productList.splice(index, 1);
  }

  add(product: Iproduct) {
    this.productList.push(product);
  }

  findById(id: number): Iproduct {
    return this.productList[id];
  }

  update(product: Iproduct, index: number) {
    this.productList[index] = product;
  }

}
