import {
  Component,
  OnInit,
  Renderer2,
  ElementRef,
  ViewChild,
  HostListener,
} from '@angular/core';
import { DataService } from './service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('check', { static: true }) check!: ElementRef;
  @ViewChild('check1', { static: true }) check1!: ElementRef;

  constructor(
    private dataService: DataService,
    private router: Router,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {}
  open() {
    this.renderer.setStyle(
      this.check.nativeElement,
      'transform',
      'translateX(0%)'
    );
  }
  close() {
    this.renderer.setStyle(
      this.check.nativeElement,
      'transform',
      'translateX(-200%)'
    );
  }
  scrollY: number = 0;

  // Sử dụng decorator @HostListener để bắt sự kiện scroll
  @HostListener('window:scroll', ['$event'])
  handleScroll(event: Event): void {
    this.scrollY = window.scrollY;
    if (this.scrollY > 100) {
      this.renderer.setStyle(this.check1.nativeElement, 'position', 'fixed');
      this.renderer.setStyle(this.check1.nativeElement, 'top', '0');
      this.renderer.setStyle(this.check1.nativeElement, 'left', '0');
      this.renderer.setStyle(this.check1.nativeElement, 'z-index', '1000');
      this.renderer.setStyle(this.check1.nativeElement, 'background', '#fff');
    } else {
      this.renderer.removeStyle(this.check1.nativeElement, 'position');
    }
  }
  onload(){
    window.scrollTo(0, 0)
  }
}
