import { ProductsService } from './shared/products.service';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'es-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'electronic-store';
  products$: Observable<any>;

  constructor(
    private productsService: ProductsService
  ) {
    this.products$ = this.productsService.getProducts();
  }
}
