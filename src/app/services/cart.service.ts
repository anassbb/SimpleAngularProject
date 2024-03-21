import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/products';
import { ShippingPrice } from '../models/shippingPrice';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private http = inject(HttpClient);
  items: Product[] = [];
  cartCount = signal<number>(0);

  addToCart(product: Product) {
    this.items.push(product);
    this.cartCount.set(this.items.length);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.cartCount.set(0);
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<ShippingPrice[]>('./assets/shipping.json');
  }

  getSubtotal() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }
}
