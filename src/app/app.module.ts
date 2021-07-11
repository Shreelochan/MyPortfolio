import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeTopViewComponent } from './home-top-view/home-top-view.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyAchievementComponent } from './my-achievement/my-achievement.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomeTopViewComponent,
    NavBarComponent,
    MyProfileComponent,
    MyAchievementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
