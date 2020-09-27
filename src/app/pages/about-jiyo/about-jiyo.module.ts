import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutJiyoPageRoutingModule } from './about-jiyo-routing.module';

import { AboutJiyoPage } from './about-jiyo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutJiyoPageRoutingModule
  ],
  declarations: [AboutJiyoPage]
})
export class AboutJiyoPageModule {}
