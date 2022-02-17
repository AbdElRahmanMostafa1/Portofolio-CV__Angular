import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AboutMeComponent } from './layout/about-me/about-me.component';
import { SectionTitleComponent } from './layout/ui/section-title/section-title.component';
import { SkillsComponent } from './layout/skills/skills.component';
import { WorkExperienceComponent } from './layout/work-experience/work-experience.component';
import { ContactMeComponent } from './layout/contact-me/contact-me.component';

import { LazyLoadImageModule } from 'ng-lazyload-image';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutMeComponent,
    SectionTitleComponent,
    SkillsComponent,
    WorkExperienceComponent,
    ContactMeComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, LazyLoadImageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
