import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-two',
  templateUrl: './splash-two.page.html',
  styleUrls: ['./splash-two.page.scss'],
  standalone: false,
})
export class SplashTwoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => this.router.navigateByUrl('/home', { replaceUrl: true }), 2000);
  }

}
