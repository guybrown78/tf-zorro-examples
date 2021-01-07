import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogoClickable:boolean = false;
  appCode:string = "T"
  appTitle:string = "Transform Zorro Examples";
  clientLogoSource:string = "https://logodix.com/logo/80482.png";
  showUserAccount:boolean = true;
  quickLinks:any[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
