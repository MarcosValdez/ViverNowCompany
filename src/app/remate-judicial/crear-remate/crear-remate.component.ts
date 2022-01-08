import { Component, OnInit } from '@angular/core';
import { TipoCambio } from '../models/tipoCambio';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-crear-remate',
  templateUrl: './crear-remate.component.html',
  styleUrls: ['./crear-remate.component.css'],
})
export class CrearRemateComponent implements OnInit {
  tipoCambio: TipoCambio[];

  selectedCity: TipoCambio;

  constructor() {
    this.tipoCambio = [{ nombre: 'Soles' }, { nombre: 'Dolares' }];
  }
  ngOnInit(): void {}
}
