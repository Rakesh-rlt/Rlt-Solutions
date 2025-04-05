import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
constructor(private router: Router) { }
buyNow(){
  this.router.navigate(['/buy']);
}
addToCart(){
  this.router.navigate(['/cart']);
}
}
