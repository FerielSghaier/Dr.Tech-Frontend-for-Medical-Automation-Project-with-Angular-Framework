import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDocteurComponent } from './login-docteur.component';

describe('LoginDocteurComponent', () => {
  let component: LoginDocteurComponent;
  let fixture: ComponentFixture<LoginDocteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDocteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginDocteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
