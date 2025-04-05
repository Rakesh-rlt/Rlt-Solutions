import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  productPage(){
    this.router.navigate(['/products']);
  }
  contactPage(){
    this.router.navigate(['/contact']);
  }
  aboutPage(){
    this.router.navigate(['/about']);
  }
}
