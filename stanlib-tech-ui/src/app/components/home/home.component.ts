import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { MatPaginator, PageEvent } from '@angular/material/paginator'
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatPaginator, MatProgressSpinnerModule, PageHeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  products: Product[] = []
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(response => {
      this.products = response
    })
  }

  handlePageNavigation(event: PageEvent) {
    this.productService.getProducts().subscribe(response => {
      this.products = response
    })
  }

  navigateToProduct(product: Product) {
    this.router.navigate(["product-sales", product.id])
  }
}
