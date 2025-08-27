import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SplashOnePage } from './splash-one.page';

describe('SplashOnePage', () => {
  let component: SplashOnePage;
  let fixture: ComponentFixture<SplashOnePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
