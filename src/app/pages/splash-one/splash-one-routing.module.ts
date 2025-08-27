import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplashOnePage } from './splash-one.page';

const routes: Routes = [
  {
    path: '',
    component: SplashOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SplashOnePageRoutingModule {}
