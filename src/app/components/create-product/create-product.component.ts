import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent {
  constructor(
    private productsService: ProductsService,
    private modalService: ModalService
  ) {}

  public form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  get title() {
    return this.form.controls.title as FormControl;
  }

  submit() {
    this.productsService
      .create({
        title: this.title.value,
        price: 109.95,
        description:
          'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        rating: { rate: 3.9, count: 120 },
      })
      .subscribe(() => this.modalService.close());
  }
}
