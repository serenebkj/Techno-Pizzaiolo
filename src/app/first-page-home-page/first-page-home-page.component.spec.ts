import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPageHomePageComponent } from './first-page-home-page.component';

describe('FirstPageHomePageComponent', () => {
  let component: FirstPageHomePageComponent;
  let fixture: ComponentFixture<FirstPageHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstPageHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPageHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
