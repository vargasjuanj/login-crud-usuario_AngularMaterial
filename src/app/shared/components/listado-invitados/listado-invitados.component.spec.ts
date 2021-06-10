import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoInvitadosComponent } from './listado-invitados.component';

describe('ListadoInvitadosComponent', () => {
  let component: ListadoInvitadosComponent;
  let fixture: ComponentFixture<ListadoInvitadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoInvitadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoInvitadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
