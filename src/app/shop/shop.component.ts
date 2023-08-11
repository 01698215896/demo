import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  data: any [] = [];
constructor(private dataService: DataService, private router: Router){}
  ngOnInit(): void {
    this.dataService.fetchData().subscribe(data =>{
      this.data = data.ticket
      console.log(this.data)
    });
  }

}
