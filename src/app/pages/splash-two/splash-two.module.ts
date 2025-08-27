import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SplashTwoPageRoutingModule } from './splash-two-routing.module';

import { SplashTwoPage } from './splash-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SplashTwoPageRoutingModule
  ],
  declarations: [SplashTwoPage]
})
export class SplashTwoPageModule {}
