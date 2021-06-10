import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoSalirComponent } from './dialogo-salir.component';

describe('DialogoSalirComponent', () => {
  let component: DialogoSalirComponent;
  let fixture: ComponentFixture<DialogoSalirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoSalirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoSalirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
