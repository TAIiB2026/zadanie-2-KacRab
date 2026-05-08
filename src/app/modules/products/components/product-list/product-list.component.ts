import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../models/product.model';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'taiib2-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styles: ``
})
export class ProductListComponent implements OnInit{
  products: Product[] = [];
  currentPage = 1;
  pageSize = 5;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadPage();
  }

  loadPage(): void {
    this.products = this.productService.getPage(this.currentPage, this.pageSize);
  }

  setPage(page: number): void {
    this.currentPage = page;
    this.loadPage();
  }

  get totalPages(): number[] {
    const count = Math.ceil(this.productService.getAll().length / this.pageSize);
    return Array.from({length: count}, (_, i) => i + 1);
  }
}
