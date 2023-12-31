import {Component, HostListener} from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";
import {Direction} from "../../../../enums/direction.enum";

@Component({
  selector: 'app-home-main-slideshow',
  templateUrl: './home-main-slideshow.component.html',
  styleUrls: ['./home-main-slideshow.component.scss'],
  animations: [
    trigger('slideUp', [
      state('open', style({transform: 'translateY(0)'})),
      state('closed', style({transform: 'translateY(100%)'})),
      transition('open => closed', [
        animate('0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)')
      ]),
      transition('closed => open', [
        animate('0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)', keyframes([
          style({transform: 'translateY(100%)', offset: 0}),
          style({transform: 'translateY(0)', offset: 1})
        ]))
      ])
    ])
  ]
})
export class HomeMainSlideshowComponent {
  /* Test Data */
  public items = [
    {
      id: 0,
      imageSrc: 'https://cdn.akamai.steamstatic.com/steam/apps/1551360/hero_capsule.jpg?t=1688579271',
      alt: 'Capsule 1',
      category: ['Action', 'RPG', 'Hunting', 'Adventure', 'Multiplayer']
    },
    {
      id: 1,
      imageSrc: 'https://cdn.akamai.steamstatic.com/steam/apps/1551360/hero_capsule.jpg?t=1688579271',
      alt: 'Capsule 2',
      category: ['Action', 'RPG', 'Hunting', 'Adventure', 'Multiplayer']
    },
    {
      id: 2,
      imageSrc: 'https://cdn.akamai.steamstatic.com/steam/apps/1551360/hero_capsule.jpg?t=1688579271',
      alt: 'Capsule 3',
      category: ['Action', 'RPG', 'Hunting', 'Adventure', 'Multiplayer']
    },
    {
      id: 3,
      imageSrc: 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/hero_capsule.jpg?t=1683618443',
      alt: 'Capsule 4',
      category: ['Action', 'RPG', 'Hunting', 'Adventure', 'Multiplayer']
    },
    {
      id: 4,
      imageSrc: 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/hero_capsule.jpg?t=1683618443',
      alt: 'Capsule 5',
      category: ['Action', 'RPG', 'Hunting', 'Adventure', 'Multiplayer']
    },
    {
      id: 5,
      imageSrc: 'https://cdn.akamai.steamstatic.com/steam/apps/1551360/hero_capsule.jpg?t=1688579271',
      alt: 'Capsule 6',
      category: ['Action', 'RPG', 'Hunting', 'Adventure', 'Multiplayer']
    },
    {
      id: 6,
      imageSrc: 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/hero_capsule.jpg?t=1683618443',
      alt: 'Capsule 7',
      category: ['Action', 'RPG', 'Hunting', 'Adventure', 'Multiplayer']
    },
    {
      id: 7,
      imageSrc: 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/hero_capsule.jpg?t=1683618443',
      alt: 'Capsule 8',
      category: ['Action', 'RPG', 'Hunting', 'Adventure', 'Multiplayer']
    },
    {
      id: 8,
      imageSrc: 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/hero_capsule.jpg?t=1683618443',
      alt: 'Capsule 9',
      category: ['Action', 'RPG', 'Hunting', 'Adventure', 'Multiplayer']
    },
  ];
  protected readonly Direction = Direction;

  private _slideshowPosition: number = 0;

  get slideshowPosition(): number {
    return this._slideshowPosition;
  }

  private _activeSlideshowPositionIndex: number = 0;

  get activeSlideshowPositionIndex(): number {
    return this._activeSlideshowPositionIndex;
  }

  private _hoveredSlideshowPositionIndex: number = -1;

  get hoveredSlideshowPositionIndex(): number {
    return this._hoveredSlideshowPositionIndex;
  }

  set hoveredSlideshowPositionIndex(value: number) {
    this._hoveredSlideshowPositionIndex = value;
  }

  private _activeItem: number = -1;

  set activeItem(value: number) {
    this._activeItem = value;
  }

  private _shownItems: number = 3;

  get shownItems(): number {
    return this._shownItems;
  }

  ngOnInit(): void {
    this.determineComponentState();
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

  public resetActiveItem(): void {
    this._activeItem = -1;
  }

  public getHoverInformationState(itemId: number): string {
    return itemId == this._activeItem ? "open" : "closed";
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
    this._shownItems = 3;
    this._activeSlideshowPositionIndex = 0;
  }
}
