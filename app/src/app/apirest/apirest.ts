import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApirestService } from '../service/Apirest.service';

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
}
