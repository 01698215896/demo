import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  activeTab = 0;
  testuers: any;
  activeTab1 = 0;


  isWaitingForResponse = false; // Biến kiểm soát trạng thái đang chờ phản hồi từ API

  constructor(private router: Router) {}

  ngOnInit(): void {}

  setActiveTab(index: number) {
    this.activeTab = index;
  }

  tk() {
    sessionStorage.setItem('idadmin', 'admin');
    this.router.navigate(['']);
  }
}
