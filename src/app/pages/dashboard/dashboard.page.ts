import { Component, OnInit } from '@angular/core';
import { CategoryService, ProductService } from '../../services';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  categories = [];
  products = [];

  slideOpts = {
    initialSlide: 0,
    speed: 40
  };

  constructor(private category: CategoryService, private product: ProductService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(){
    const param = {};
    this.category.getAllCategories(param).subscribe( res => {
      this.categories = res.data;
      this.getProducts(this.categories[0]._id);
    });
  }

  getProducts(categoriesId) {
    const param = {
      category: categoriesId
    };
    this.product.getAllProducts(param).subscribe(res => {
      this.products = res.data;
    });
  }
}
