import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {BannerAdComponent} from './banner-ad/banner-ad.component';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {FormsModule} from '@angular/forms';
import {YoutubeDataService} from './youtube-data.service';
import {DataServiceService} from './data-service.service';
import {HttpModule} from '@angular/http';
import {RouterModule} from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BannerAdComponent,
    SearchBarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'home', component: HomeComponent},
      { path: 'search', component: SearchBarComponent},
      { path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [YoutubeDataService, DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
