import { Component, OnInit } from '@angular/core';
import { GlobalVariables } from 'src/globalVariables';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  logoImage: string =
    'https://rarathemesdemo-147ed.kxcdn.com/perfect-portfolio/wp-content/uploads/sites/56/2018/05/cropped-logo.png';
  defaultImage = GlobalVariables.defaultImage;

  constructor() {}

  ngOnInit(): void {}
}
