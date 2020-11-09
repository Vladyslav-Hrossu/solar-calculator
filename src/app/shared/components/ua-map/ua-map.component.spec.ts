import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UaMapComponent } from './ua-map.component';

describe('UaMapComponent', () => {
  let component: UaMapComponent;
  let fixture: ComponentFixture<UaMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UaMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UaMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
