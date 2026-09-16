import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { vi } from 'vitest';
import { Estado } from './estado';
import { CarritoService } from '../service/carrito.service';

describe('Estado', () => {
  let component: Estado;
  let fixture: ComponentFixture<Estado>;
  let carritoMock: any;

  beforeEach(async () => {
    // "Falsificamos" el servicio: así el test no depende de su
    // implementación real, solo de lo que expone (items$ y vaciarCarrito).
    carritoMock = {
      items$: new BehaviorSubject<string[]>(['Producto 1']),
      vaciarCarrito: vi.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [Estado],
      providers: [{ provide: CarritoService, useValue: carritoMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(Estado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar los items que entrega el servicio', () => {
    expect(component.items.length).toBe(1);
    expect(component.items[0]).toBe('Producto 1');
  });

  it('debería llamar a vaciarCarrito al hacer click en el botón', () => {
    component.vaciar();
    expect(carritoMock.vaciarCarrito).toHaveBeenCalled();
  });
});