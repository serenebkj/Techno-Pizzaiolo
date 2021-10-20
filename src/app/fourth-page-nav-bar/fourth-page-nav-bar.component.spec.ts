import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthPageNavBarComponent } from './fourth-page-nav-bar.component';

describe('FourthPageNavBarComponent', () => {
  let component: FourthPageNavBarComponent;
  let fixture: ComponentFixture<FourthPageNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthPageNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthPageNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
