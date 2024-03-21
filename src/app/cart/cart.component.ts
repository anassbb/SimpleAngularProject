import { CurrencyPipe, NgFor, TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: true,
  imports: [NgFor, RouterLink, TitleCasePipe, CurrencyPipe],
})
export class CartComponent {
  private carteService = inject(CartService);

  items = this.carteService.getItems();
  subtotal = this.carteService.getSubtotal();
}
