import { Component, OnInit } from '@angular/core';
import { GlobalVariables } from 'src/globalVariables';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  sectionTitle: string = 'Work/Training Experience';

  defaultImage: string = GlobalVariables.defaultImage;
  project1 = '../../../assets/images/The Academy.jpg';
  project2 = '../../../assets/images/Twitter Logo.jpg';
  project3 = '../../../assets/images/ecommerce image.png';
  project4 = '../../../assets/images/Tesla Logo.png';
  project5 = '../../../assets/images/YouTube logo.png';
  project6 = '../../../assets/images/breaking-bad-logo.jpg';
  project7 = '../../../assets/images/Restaurant Image.jpg';

  constructor() {}

  ngOnInit(): void {}
}
