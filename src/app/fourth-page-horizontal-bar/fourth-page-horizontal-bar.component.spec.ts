import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthPageHorizontalBarComponent } from './fourth-page-horizontal-bar.component';

describe('FourthPageHorizontalBarComponent', () => {
  let component: FourthPageHorizontalBarComponent;
  let fixture: ComponentFixture<FourthPageHorizontalBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthPageHorizontalBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthPageHorizontalBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
