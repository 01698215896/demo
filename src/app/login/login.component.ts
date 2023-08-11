import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  activeTab = 0;
  testuers: any;


  isWaitingForResponse = false; // Biến kiểm soát trạng thái đang chờ phản hồi từ API

  constructor(

  ) {}

  ngOnInit(): void {
    
  }

  setActiveTab(index: number) {
    this.activeTab = index;
  }



  

}
