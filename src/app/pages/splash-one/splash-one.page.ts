import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-one',
  templateUrl: './splash-one.page.html',
  styleUrls: ['./splash-one.page.scss'],
  standalone: false,
})
export class SplashOnePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => this.router.navigateByUrl('/splash-two', { replaceUrl: true }),2000);
  }

}
