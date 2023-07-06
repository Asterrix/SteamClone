import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-home-category-item-list',
  templateUrl: './home-category-item-list.component.html',
  styleUrls: ['./home-category-item-list.component.scss']
})
export class HomeCategoryItemListComponent {
  @Input() categoryName: string = "";
}
