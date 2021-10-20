import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthPageBillComponent } from './fourth-page-bill.component';

describe('FourthPageBillComponent', () => {
  let component: FourthPageBillComponent;
  let fixture: ComponentFixture<FourthPageBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthPageBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthPageBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
