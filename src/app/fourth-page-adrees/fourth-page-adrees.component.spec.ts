import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthPageAdreesComponent } from './fourth-page-adrees.component';

describe('FourthPageAdreesComponent', () => {
  let component: FourthPageAdreesComponent;
  let fixture: ComponentFixture<FourthPageAdreesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthPageAdreesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthPageAdreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
