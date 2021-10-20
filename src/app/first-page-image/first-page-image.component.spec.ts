import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPageImageComponent } from './first-page-image.component';

describe('FirstPageImageComponent', () => {
  let component: FirstPageImageComponent;
  let fixture: ComponentFixture<FirstPageImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstPageImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPageImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
