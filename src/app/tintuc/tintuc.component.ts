import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tintuc',
  templateUrl: './tintuc.component.html',
  styleUrls: ['./tintuc.component.css'],
})
export class TintucComponent implements OnInit {
  data: any[] = [];
  savedata: any;
  Title: string = '';
  img: string = '';
  avt: string = '';
  auth: string = '';
  email: string = '';

  Content: string = '';
  DateSubmitted: string = '';
  constructor(private dataService: DataService, private router: Router) {}
  ngOnInit(): void {
    this.dataService.fetchData().subscribe((data) => {
      this.data = data.NewsBoard;

      const id = sessionStorage.getItem('dataEvent');
      this.savedata = this.data.find((data) => data.IDNews == id);
      console.log(this.savedata);
      this.Title = this.savedata.Title;
      this.Content = this.savedata.Content;
      this.img = this.savedata.imgbg;

      this.avt = this.savedata.imgavt;
      this.auth = this.savedata.auth;
      this.email = this.savedata.email;

      this.DateSubmitted = this.savedata.DateSubmitted;
    });
  }
}
