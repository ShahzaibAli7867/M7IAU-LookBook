import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SplashOnePageRoutingModule } from './splash-one-routing.module';

import { SplashOnePage } from './splash-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SplashOnePageRoutingModule
  ],
  declarations: [SplashOnePage]
})
export class SplashOnePageModule {}
