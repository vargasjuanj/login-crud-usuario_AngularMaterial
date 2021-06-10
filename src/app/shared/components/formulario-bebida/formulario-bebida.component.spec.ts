import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioBebidaComponent } from './formulario-bebida.component';

describe('FormularioBebidaComponent', () => {
  let component: FormularioBebidaComponent;
  let fixture: ComponentFixture<FormularioBebidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioBebidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioBebidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
