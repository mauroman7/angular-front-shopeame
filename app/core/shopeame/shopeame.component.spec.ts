import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopeameComponent } from './shopeame.component';

describe('ShopeameComponent', () => {
  let component: ShopeameComponent;
  let fixture: ComponentFixture<ShopeameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopeameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopeameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
