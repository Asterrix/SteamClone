import { Component } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent {
  private _dropdownMenuActive: boolean = false;
  private _searchIconHovered: boolean = false;

  get dropdownMenuActive(): boolean {
    return this._dropdownMenuActive;
  }

  set dropdownMenuActive(value: boolean) {
    this._dropdownMenuActive = value;
  }

  get searchIconHovered(): boolean {
    return this._searchIconHovered;
  }

  set searchIconHovered(value: boolean) {
    this._searchIconHovered = value;
  }
}
