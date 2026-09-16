import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApirestService } from '../service/apirest.service';
import { CarritoService } from '../service/carrito.service';

@Component({
  selector: 'app-apirest',
  imports: [],
  templateUrl: './apirest.html',
  styleUrl: './apirest.css'
})
export class Apirest implements OnInit {

  character: any[] = [];

  constructor(
    private apiRestService: ApirestService,
    private carritoService: CarritoService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadApi();
  }

  loadApi() {
    this.apiRestService.getAll().subscribe({
      next: (data: any) => {
        this.character = data.items;
        this.cdr.detectChanges()
      },

      error: (error) => {
        console.error('Error:', error);
      }
    });
  }

  agregarAlCarrito(nombre: string) {
    this.carritoService.agregarItem(nombre);
  }
}
