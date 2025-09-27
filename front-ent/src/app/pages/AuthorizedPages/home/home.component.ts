import {Component, OnInit} from '@angular/core';

import {Category} from "../../../model/category";
import {CategoryService} from "../../../shared/services/category.service";
import {Router} from "@angular/router";
import {CarouselModule} from "primeng/carousel";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [
    CarouselModule

  ],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: Category[] = [];
  products: any;
  responsiveOptions;

  constructor(private categoryService: CategoryService, private _router: Router) {

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit() {
    this.gettAllCategories();
  }

  gettAllCategories() {
    this.categoryService.getAllCategories().subscribe(
      data => {
        this.categories = data;
        // console.log(this.categories);
      }
    )
  }

  showRestaurantMenu() {
    this._router.navigate(['main/pages/menu']);
    // console.log(this._router.url);
  }
}
