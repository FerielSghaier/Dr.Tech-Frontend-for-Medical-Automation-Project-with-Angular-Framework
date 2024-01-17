import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterDocteurComponent } from './ajouter-docteur.component';

describe('AjouterDocteurComponent', () => {
  let component: AjouterDocteurComponent;
  let fixture: ComponentFixture<AjouterDocteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterDocteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterDocteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
