import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ServiceService} from '../../services/service.service';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  addProductForm = this.fb.group({
    id: ['', [Validators.required, Validators.minLength(4)]],
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: ['', [Validators.required, Validators.minLength(4)]]
  });

  constructor(private fb: FormBuilder,
              private productService: ServiceService,
              private route: Router) {
  }

  ngOnInit() {
  }

  submit() {
    this.productService.add(this.addProductForm.value);
    return this.route.navigate(['/products']);
  }

  get id() {
    return this.addProductForm.get('id');
  }

  get name() {
    return this.addProductForm.get('name');
  }

  get price() {
    return this.addProductForm.get('price');
  }


}
