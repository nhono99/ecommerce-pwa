import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatListModule,
  MatIconModule,
  MatSidenavModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatBadgeModule,
  MatSnackBarModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { CartComponent } from './cart/cart.component';
import { SubTotalPipe } from './sub-total.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


const matDesignModules = [
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatBadgeModule,
  MatSnackBarModule];

@NgModule({
  entryComponents: [CartComponent],
  declarations: [
    AppComponent,
    NavComponent,
    AddToCartComponent,
    CartComponent,
    SubTotalPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    matDesignModules,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
