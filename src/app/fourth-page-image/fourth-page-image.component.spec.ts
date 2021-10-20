import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthPageImageComponent } from './fourth-page-image.component';

describe('FourthPageImageComponent', () => {
  let component: FourthPageImageComponent;
  let fixture: ComponentFixture<FourthPageImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthPageImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthPageImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
