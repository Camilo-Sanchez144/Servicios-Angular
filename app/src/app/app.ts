import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CarritoService } from './service/carrito.service';
import { Subscription } from 'rxjs';

@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('app');
  cantidadCarrito = 0;
  private sub!: Subscription;

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.sub = this.carritoService.items$.subscribe(items => {
      this.cantidadCarrito = items.length;
    });
  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }
}
