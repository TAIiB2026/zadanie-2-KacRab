import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1,  price: 199.99, createdAt: new Date('2024-01-15'), name: 'Laptop',        description: 'Wydajny laptop do pracy' },
    { id: 2,  price: 89.50,  createdAt: new Date('2024-02-20'), name: 'Myszka',        description: 'Bezprzewodowa myszka ergonomiczna' },
    { id: 3,  price: 349.00, createdAt: new Date('2024-03-05'), name: 'Monitor',       description: 'Monitor 27 cali 4K' },
    { id: 4,  price: 59.99,  createdAt: new Date('2024-04-10'), name: 'Klawiatura',    description: 'Mechaniczna klawiatura RGB' },
    { id: 5,  price: 129.00, createdAt: new Date('2024-05-18'), name: 'Słuchawki',     description: 'Słuchawki z redukcją szumów' },
    { id: 6,  price: 249.99, createdAt: new Date('2024-06-22'), name: 'Tablet',        description: 'Tablet 10 cali z rysikiem' },
    { id: 7,  price: 19.99,  createdAt: new Date('2024-07-30'), name: 'Podkładka',     description: 'Duża podkładka pod myszkę' },
    { id: 8,  price: 499.00, createdAt: new Date('2024-08-14'), name: 'Drukarka',      description: 'Drukarka laserowa monochromatyczna' },
    { id: 9,  price: 75.00,  createdAt: new Date('2024-09-09'), name: 'Kamera',        description: 'Kamera internetowa Full HD' },
    { id: 10, price: 39.99,  createdAt: new Date('2024-10-01'), name: 'Hub USB',       description: 'Hub USB-C 7 portów' },
    { id: 11, price: 159.00, createdAt: new Date('2024-11-11'), name: 'Głośniki',      description: 'Głośniki stereo 2.1' },
    { id: 12, price: 299.00, createdAt: new Date('2024-12-24'), name: 'Dysk zewnętrzny', description: 'Dysk SSD 1TB USB 3.2' },
  ];

  getAll(): Product[] {
    return [...this.products];
  }

  getPage(page: number, pageSize: number = 5): Product[] {
    const start = (page -1) *pageSize;
    if (start >= this.products.length) return [];
    return [...this.products.slice(start, start + pageSize)];
  }

  getById(id: number): Product | undefined {
    const found = this.products.find(p => p.id === id);
    return found ? {...found} : undefined;
  }

  delete (id: number): void {
    this.products = this.products.filter( p => p.id !== id);
  }

  constructor() { }
}
