import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CarritoService } from '../service/carrito.service';

@Component({
  imports: [CommonModule],
  selector: 'app-estado',
  styleUrl: './estado.css',
  templateUrl: './estado.html',
})
export class Estado implements OnInit, OnDestroy {
  items: string[] = [];
  private sub!: Subscription;

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    // Nos suscribimos al observable del servicio: cada vez que
    // cambie el carrito, "items" se actualiza automáticamente.
    this.sub = this.carritoService.items$.subscribe(items => {
      this.items = items;
    });
  }

  ngOnDestroy(): void {
    // Nos desuscribimos al destruir el componente para no dejar
    // la suscripción "viva" en memoria.
    this.sub.unsubscribe();
  }

  vaciar(): void {
    this.carritoService.vaciarCarrito();
  }
}