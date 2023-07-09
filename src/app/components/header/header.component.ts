import {Component, HostListener, OnInit} from '@angular/core';
import {animate, animateChild, keyframes, query, style, transition, trigger} from "@angular/animations";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('dumbParent', [
      transition('* => void', [
        query('@*', [animateChild()], {optional: true})
      ])
    ]),
    trigger('slideRight', [
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate('0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)')
      ]),
      transition('* => void', [
        style({transform: 'translateX(0)'}),
        animate('0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)', keyframes([
          style({transform: 'translateX(0)', offset: 0}),
          style({transform: 'translateX(-100%)', offset: 1})
        ]))
      ])
    ]),
  ]
})
export class HeaderComponent implements OnInit {
  private _maxMobileResolution: number = 1024;
  private _mobileView: boolean = false;
  private _sidebarOpen: boolean = false;

  constructor(private router: Router) {
  }

  get mobileView(): boolean {
    return this._mobileView;
  }


  get sidebarOpen(): boolean {
    return this._sidebarOpen;
  }

  ngOnInit(): void {
    this.calculateScreenWidth();
  }

  public toggleSidebar(): void {
    this._sidebarOpen = !this._sidebarOpen;
  }

  public isUrlMatch(desiredUrl: string): boolean {
    return this.router.url === desiredUrl;
  }

  @HostListener('window:resize', ['$event'])
  private onResize(): void {
    this.calculateScreenWidth();
    if (!this._mobileView && this._sidebarOpen) {
      this._sidebarOpen = false;
    }
  }

  private calculateScreenWidth(): void {
    this._mobileView = window.innerWidth < this._maxMobileResolution;
  }
}
