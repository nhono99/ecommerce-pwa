import { CartService } from './shared/cart.service';
import { ProductsService } from './shared/products.service';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'es-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'electronic-store';
  products$: Observable<any>;
  cart$: Observable<any>;
  cart;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private matDialog: MatDialog
  ) {
    this.products$ = this.productsService.getProducts();
    this.cart$ = this.cartService.cart$.subscribe(
      cart => this.cart = cart);
  }

  onAddProduct(count, product) {
    this.cartService.addToCart(count, product);
  }

  openCart() {
    this.matDialog.open(CartComponent, {
      width: '500px',
    });
  }
}
