import { Component, OnInit } from '@angular/core';
import { GlobalVariables } from 'src/globalVariables';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  sectionTitle: string = 'Introducing Myself';

  profileImgPath: string = '../../assets/images/Abdo.jpg';
  defaultImage: string = GlobalVariables.defaultImage;

  constructor() {}

  ngOnInit(): void {}
}
