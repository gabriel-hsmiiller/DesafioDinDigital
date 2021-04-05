import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { BodyCardComponent } from './components/body-card/body-card.component';
import { FooterComponent } from './components/footer/footer.component';

import { SvgFacebook, SvgInstagram, SvgTwitter } from './utils/icon.util';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    BodyCardComponent,
    FooterComponent,
    SvgInstagram,
    SvgFacebook,
    SvgTwitter,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
