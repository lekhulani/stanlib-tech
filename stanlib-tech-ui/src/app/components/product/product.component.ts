import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product, ProductSale } from '../../models/product';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, MatButton, MatTableModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  product?: Product;
  productSales: ProductSale[] = [];
  displayedColumns: string[] = []
  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) {
      this.displayedColumns = ['date', 'price', 'quantity', 'saleValue'];
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = Number(params['id'])
      this.productService.getProducts().subscribe(products => {
        this.product = products.find(p => p.id === productId);
        if(!this.product) {
          this.router.navigate(['']);
        }
        this.productService.getProductSales(this.product?.id).subscribe(sales => {
          this.productSales = sales;
        })
      })
      
    })
  }

  getSaleValue(sale: ProductSale) {
    return sale.salePrice * sale.saleQty
  }

  goHome() {
    this.router.navigate([''])
  }

}
