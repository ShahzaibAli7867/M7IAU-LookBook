import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SplashTwoPage } from './splash-two.page';

describe('SplashTwoPage', () => {
  let component: SplashTwoPage;
  let fixture: ComponentFixture<SplashTwoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
