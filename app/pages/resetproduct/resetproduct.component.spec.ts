import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetproductComponent } from './resetproduct.component';

describe('ResetproductComponent', () => {
  let component: ResetproductComponent;
  let fixture: ComponentFixture<ResetproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
