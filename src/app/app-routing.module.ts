import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash-one',
    pathMatch: 'full'
  },
  {
    path: 'splash-one',
    loadChildren: () => import('./pages/splash-one/splash-one.module').then( m => m.SplashOnePageModule)
  },
  {
    path: 'splash-two',
    loadChildren: () => import('./pages/splash-two/splash-two.module').then( m => m.SplashTwoPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
