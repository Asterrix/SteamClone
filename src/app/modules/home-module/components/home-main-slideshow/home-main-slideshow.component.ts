import {Component, HostListener, OnInit} from '@angular/core';
import {Direction} from "../../enums/direction.enum";

@Component({
  selector: 'app-home-main-slideshow',
  templateUrl: './home-main-slideshow.component.html',
  styleUrls: ['./home-main-slideshow.component.scss']
})
export class HomeMainSlideshowComponent implements OnInit{
  private _counter: number = 0;
  private _shownCapsules: number = 3;
  private _activeCapsuleIndex: number = 0;
  protected readonly Direction = Direction;

  get counter(): number {
    return this._counter;
  }

  get shownCapsules(): number {
    return this._shownCapsules;
  }

  get activeCapsuleIndex(): number {
    return this._activeCapsuleIndex;
  }

  /* Test Data */
  public capsules = [
    {imageSrc: 'assets/hero_capsule.jpg', alt: 'Capsule 1'},
    {imageSrc: 'assets/hero_capsule.jpg', alt: 'Capsule 2'},
    {imageSrc: 'assets/hero_capsule.jpg', alt: 'Capsule 3'},
    {imageSrc: 'assets/hero_capsule_2.jpg', alt: 'Capsule 4'},
    {imageSrc: 'assets/hero_capsule_2.jpg', alt: 'Capsule 5'},
    {imageSrc: 'assets/hero_capsule.jpg', alt: 'Capsule 6'},
    {imageSrc: 'assets/hero_capsule_2.jpg', alt: 'Capsule 7'},
    {imageSrc: 'assets/hero_capsule_2.jpg', alt: 'Capsule 8'},
    {imageSrc: 'assets/hero_capsule_2.jpg', alt: 'Capsule 9'},
  ];

  ngOnInit(): void {
    this.determineComponentState();
  }

  public handleSlideshowMovement(direction: Direction): void {
    const lastIndex: number = this.capsules.length - this._shownCapsules;

    if (direction === Direction.Next) {
      if (this._counter === lastIndex) {
        this._counter = 0;
        this._activeCapsuleIndex = 0;
      } else {
        this._counter += this._shownCapsules;
        this._activeCapsuleIndex += 1;
      }
    } else if (direction === Direction.Previous) {
      if (this._counter === 0) {
        this._counter = lastIndex;
        this._activeCapsuleIndex = lastIndex / this._shownCapsules;
      } else {
        this._counter -= this._shownCapsules;
        this._activeCapsuleIndex -= 1;
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  private onResize(): void {
    this.determineComponentState();
  }

  private determineComponentState(): void {
    const isMobileScreen: boolean = window.innerWidth < 1024;

    if (isMobileScreen) {
      this.showAllCapsules();
    } else if (!isMobileScreen) {
      this.showLimitedCapsules();
    }
  }

  private showAllCapsules(): void {
    this._shownCapsules = this.capsules.length;
  }

  private showLimitedCapsules(): void {
    this._counter = 0;
    this._shownCapsules = 3;
    this._activeCapsuleIndex = 0;
  }
}
