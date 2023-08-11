import {
  Component,
  OnInit,
  Renderer2,
  ElementRef,
  ViewChild,
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
  constructor(private dataService: DataService, private router: Router,  private renderer: Renderer2,) {}

  ngOnInit(): void {}
  open(){

    this.renderer.setStyle(this.check.nativeElement, 'transform', 'translateX(0%)');
  }
  close(){

    this.renderer.setStyle(this.check.nativeElement, 'transform', 'translateX(-200%)');
  }
}
