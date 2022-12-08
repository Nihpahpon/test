import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { HomeComponent } from './home/home.component';
import { CompaComponent } from './page1/compa/compa.component';
import { CompbComponent } from './page1/compb/compb.component';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import { Compa2Component } from './page2/compa2/compa2.component';
import { Compb2Component } from './page2/compb2/compb2.component';
import {InplaceModule} from 'primeng/inplace';
import {CardModule} from 'primeng/card';
import {BadgeModule} from 'primeng/badge';
import {AvatarModule} from 'primeng/avatar';



@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    HomeComponent,
    CompaComponent,
    CompbComponent,
    Compa2Component,
    Compb2Component,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    InplaceModule,
    CardModule,
    BadgeModule,
    AvatarModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
