import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  data1: string = '';
  savedata: any;
  data: any[] = [];
  data2: any[] = [];

  tencauthu: string = '';
  ngaysinh: string = '';


  soban: string = '';
  doituyen: string = '';
  chieucao: string = '';
  chiecgiayvang: string = '';
  cauthumuagiai: string = '';
  giaicauthutre: string = '';
  vodichngoaihang: string = '';
  cauthucuathang: string = '';

  logo: string = '';
  avt: string = '';

  constructor(private dataService: DataService, private router: Router) {}
  ngOnInit(): void {
    this.dataService.fetchData().subscribe((data) => {
      this.data = data.top10cauthu;

      const id = sessionStorage.getItem('dataPlayer');

      this.savedata = this.data.find((data) => data.id == id);
      this.tencauthu = this.savedata.tencauthu;
      this.ngaysinh = this.savedata.ngaysinh;
      this.soban = this.savedata.soban;
      this.doituyen = this.savedata.doituyen;
      this.chieucao = this.savedata.chieucao;
      this.chiecgiayvang = this.savedata.chiecgiayvang;
      this.cauthumuagiai = this.savedata.cauthumuagiai;
      this.giaicauthutre = this.savedata.giaicauthutre;
      this.vodichngoaihang = this.savedata.vodichngoaihang;
      this.cauthucuathang = this.savedata.cauthucuathang;

      this.logo = this.savedata.logo;
      this.avt = this.savedata.avt;
    });
    this.dataService.fetchData().subscribe((data) => {
      this.data2 = data.NewsBoard;
    });
  }
  event(id: string) {
    sessionStorage.setItem('dataEvent', JSON.stringify(id));
    this.router.navigate(['/tintuc']);
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
});
    console.log(id);
  }
}
