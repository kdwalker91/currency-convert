import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesoDollarComponent } from './peso-dollar.component';

describe('PesoDollarComponent', () => {
  let component: PesoDollarComponent;
  let fixture: ComponentFixture<PesoDollarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesoDollarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesoDollarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
