import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private itemsSubject = new BehaviorSubject<string[]>([]);
  items$ = this.itemsSubject.asObservable();

  agregarItem(item: string): void {
    const actuales = this.itemsSubject.value;
    this.itemsSubject.next([...actuales, item]);
  }

  vaciarCarrito(): void {
    this.itemsSubject.next([]);
  }
}