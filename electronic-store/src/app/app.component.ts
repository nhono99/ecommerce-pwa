import { CartService } from './shared/cart.service';
import { ProductsService } from './shared/products.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'es-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'electronic-store';
  products$: Observable<any>;
  cart$: Observable<any>;
  cart;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private matDialog: MatDialog,
    private swUpdate: SwUpdate,
    private matSnackBar: MatSnackBar
  ) {

    this.products$ = this.productsService.getProducts();
    this.cart$ = this.cartService.cart$.subscribe(
      cart => this.cart = cart);

    swUpdate.available.subscribe(e => {
      this.matSnackBar.open('New update available', 'Install Now', {
        duration: 4000
      }).onAction().subscribe(() => {
        swUpdate.activateUpdate().then(() => location.reload());
      });
    });

  }

  onAddProduct(count, product) {
    this.cartService.addToCart(count, product);
  }

  openCart() {
    this.matDialog.open(CartComponent, {
      width: '500px',
    });
  }

  displayNetworkStatus() {
    if (navigator.onLine) {
      document.querySelector('body').style.filter = 'grayscale(1)';
    }
  }

  ngOnInit(): void {
    this.displayNetworkStatus();
    window.addEventListener('online', this.displayNetworkStatus);
    window.addEventListener('offline', this.displayNetworkStatus);
  }

}
