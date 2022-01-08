import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css'],
})
export class InformacionComponent implements OnInit {
  proyectos = [
    {
      nombre: 'Proyecto 1',
      ubicacion: 'Av. Las Palmeras 15043 Los Olivos',
      tipo: 'Remate Judicial',
    },
    {
      nombre: 'Proyecto 2',
      ubicacion: 'Av. Universitaria 1234',
      tipo: 'Remodelación',
    },
    {
      nombre: 'Proyecto 3',
      ubicacion: 'Av. Las Palmeras 15043 Los Olivos',
      tipo: 'Remodelación',
    },
    {
      nombre: 'Proyecto 4',
      ubicacion: 'Av. Universitaria 1234',
      tipo: 'Remate Judicial',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
