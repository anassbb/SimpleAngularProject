import { CartService } from './../services/cart.service';
import { AsyncPipe, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ShippingPrice } from '../models/shippingPrice';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    NgFor,
    RouterLink,
    AsyncPipe,
    CurrencyPipe,
  ],
})
export class CheckoutComponent {
  private cartService = inject(CartService);
  private router = inject(Router);
  private builder = inject(FormBuilder);
  private toastr = inject(ToastrService);

  items = this.cartService.getItems();
  subtotal = this.cartService.getSubtotal();
  shippingCosts!: Observable<ShippingPrice[]>;
  total = 0;
  customer = {};

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
