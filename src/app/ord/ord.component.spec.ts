import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdComponent } from './ord.component';

describe('OrdComponent', () => {
  let component: OrdComponent;
  let fixture: ComponentFixture<OrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
