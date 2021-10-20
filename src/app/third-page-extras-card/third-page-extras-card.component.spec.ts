import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPageExtrasCardComponent } from './third-page-extras-card.component';

describe('ThirdPageExtrasCardComponent', () => {
  let component: ThirdPageExtrasCardComponent;
  let fixture: ComponentFixture<ThirdPageExtrasCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdPageExtrasCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdPageExtrasCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
