import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesLayout } from './services.layout';

describe('ServicesLayout', () => {
  let component: ServicesLayout;
  let fixture: ComponentFixture<ServicesLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(ServicesLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
