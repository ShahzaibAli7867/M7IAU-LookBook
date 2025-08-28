import { Component, OnInit } from '@angular/core';
import { SearchbarInputEventDetail } from '@ionic/angular';
import { IonSearchbarCustomEvent } from '@ionic/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,

})
export class HomePage implements OnInit {
activeTab: any;

searchTerm: any;
ngOnInit(): void {
   this.activeTab = 'search'; // default active
}

  setActive(tab: string) {
    this.activeTab = tab;
  }
}
