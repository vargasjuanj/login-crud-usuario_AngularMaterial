import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaInvitadoComponent } from './tarjeta-invitado.component';

describe('TarjetaInvitadoComponent', () => {
  let component: TarjetaInvitadoComponent;
  let fixture: ComponentFixture<TarjetaInvitadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaInvitadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaInvitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
