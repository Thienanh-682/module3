import {Component, OnInit} from '@angular/core';
import {Iproduct} from '../../Iproduct';
import {ServiceService} from '../../services/service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  withImage = 100;
  show = true;
  messages: string;
  productFilter: Iproduct[] = [];

  constructor(private productService: ServiceService) {
  }
  product = this.productService.getAll();
  showHide() {
    this.show = !this.show;
  }

  delete(id) {
    this.productService.delete(id);
  }

  filter(keyword) {
    this.productFilter = (keyword) ? this.search(keyword) : this.product;
  }

  search(keyword) {
    return this.productFilter.filter(
      product => product.name.indexOf(keyword) !== -1
    );
  }

  ngOnInit() {
    this.productFilter = this.product;
  }

  showMessage(even) {
    this.messages = even;
  }
}
