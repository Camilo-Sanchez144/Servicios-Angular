import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {
  miFormulario: FormGroup;
  datosGuardados: any = null;

  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['']
    });
  }

  enviar() {
    if (this.miFormulario.valid) {
      this.datosGuardados = this.miFormulario.value;
      console.log('Formulario enviado:', this.datosGuardados);
      this.miFormulario.reset(); // Limpia el formulario
    } else {
      console.log('Formulario inválido, revisa los campos.');
      // Marca todos los campos como tocados para mostrar errores
      this.miFormulario.markAllAsTouched();
    }
  }
}
