import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyeccion-rentabilidad',
  templateUrl: './proyeccion-rentabilidad.component.html',
  styleUrls: ['./proyeccion-rentabilidad.component.css'],
})
export class ProyeccionRentabilidadComponent implements OnInit {
  products = [
    { venta: 'Minimo', porcentaje5: 3079, porcentaje3: 1847, monto: 12665 },
    { venta: 'Normal', porcentaje5: 3079, porcentaje3: 1847, monto: 16711 },
    { venta: 'Bueno', porcentaje5: 3079, porcentaje3: 1847, monto: 20758 },
    { venta: 'Excelente', porcentaje5: 3079, porcentaje3: 1847, monto: 24804 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
