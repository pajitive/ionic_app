import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  categories = [];

  constructor(private category: CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(){
    const param = {};
    this.category.getAllCategories(param).subscribe( res => {
      this.categories = res.data;
      console.log('category==', this.categories);
    });
  }
}
