import {Component, HostListener} from '@angular/core';
import {Direction} from "../../../../enums/direction.enum";

@Component({
  selector: 'app-home-category-slideshow',
  templateUrl: './home-category-slideshow.component.html',
  styleUrls: ['./home-category-slideshow.component.scss']
})
export class HomeCategorySlideshowComponent {
  /* Test Data */
  public items = [
    {
      id: 0,
      imageSrc: 'https://store.steampowered.com/categories/homepageimage/category/visual_novel?cc=us&l=english',
      alt: 'Capsule 1',
      category: 'Role-Playing'
    },
    {
      id: 1,
      imageSrc: 'https://store.steampowered.com/categories/homepageimage/category/visual_novel?cc=us&l=english',
      alt: 'Capsule 2',
      category: 'Action'
    },
    {
      id: 2,
      imageSrc: 'https://store.steampowered.com/categories/homepageimage/category/visual_novel?cc=us&l=english',
      alt: 'Capsule 3',
      category: 'Anime'
    },
    {
      id: 3,
      imageSrc: 'https://store.steampowered.com/categories/homepageimage/category/visual_novel?cc=us&l=english',
      alt: 'Capsule 4',
      category: 'Adventure'
    },
    {
      id: 4,
      imageSrc: 'https://store.steampowered.com/categories/homepageimage/category/visual_novel?cc=us&l=english',
      alt: 'Capsule 5',
      category: 'Hunting'
    },
    {
      id: 5,
      imageSrc: 'https://store.steampowered.com/categories/homepageimage/category/visual_novel?cc=us&l=english',
      alt: 'Capsule 6',
      category: 'Multiplayer'
    },
    {
      id: 6,
      imageSrc: 'https://store.steampowered.com/categories/homepageimage/category/visual_novel?cc=us&l=english',
      alt: 'Capsule 7',
      category: 'RPG'
    },
    {
      id: 7,
      imageSrc: 'https://store.steampowered.com/categories/homepageimage/category/visual_novel?cc=us&l=english',
      alt: 'Capsule 8',
      category: 'Strategy'
    },
  ];
  protected readonly Direction = Direction;

  private _shownItems: number = 4;

  get shownItems(): number {
    return this._shownItems;
  }

  private _slideshowPosition: number = 0;

  get slideshowPosition(): number {
    return this._slideshowPosition;
  }

  private _activeSlideshowPositionIndex: number = 0;

  get activeSlideshowPositionIndex(): number {
    return this._activeSlideshowPositionIndex;
  }

  private _hoveredSlideshowPositionIndex: number = -1

  get hoveredSlideshowPositionIndex(): number {
    return this._hoveredSlideshowPositionIndex;
  }

  set hoveredSlideshowPositionIndex(value: number) {
    this._hoveredSlideshowPositionIndex = value;
  }

  public handleSlideshowMovement(direction: Direction): void {
    const lastIndex: number = this.items.length - this._shownItems;

    switch (direction) {
      case Direction.Next:
        this._slideshowPosition = (this._slideshowPosition === lastIndex) ? 0 : this._slideshowPosition + this._shownItems;
        this._activeSlideshowPositionIndex = (this._slideshowPosition === 0) ? 0 : this._activeSlideshowPositionIndex + 1;
        break;
      case Direction.Previous:
        this._slideshowPosition = (this._slideshowPosition === 0) ? lastIndex : this._slideshowPosition - this._shownItems;
        this._activeSlideshowPositionIndex = (this._slideshowPosition === lastIndex) ? lastIndex / this._shownItems : this._activeSlideshowPositionIndex - 1;
        break;
    }
  }

  public handleSlideshowIndicatorMovement(selectedIndex: number): void {
    const newPosition: number = selectedIndex * this._shownItems;
    const totalItems: number = this.items.length;

    if (newPosition >= totalItems) {
      return
    }

    this._activeSlideshowPositionIndex = selectedIndex;
    this._slideshowPosition = newPosition;
  }

  @HostListener('window:resize')
  private onResize(): void {
    this.determineComponentState();
  }

  private determineComponentState(): void {
    const isMobileScreen: boolean = window.innerWidth < 1024;

    if (isMobileScreen) {
      this.showAllItems();
    } else if (!isMobileScreen) {
      this.showLimitedItems();
    }
  }

  private showAllItems(): void {
    this._shownItems = this.items.length;
  }

  private showLimitedItems(): void {
    this._slideshowPosition = 0;
    this._shownItems = 4;
    this._activeSlideshowPositionIndex = 0;
  }
}
