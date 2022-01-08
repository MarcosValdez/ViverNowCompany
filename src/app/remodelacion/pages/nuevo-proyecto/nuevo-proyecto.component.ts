import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css'],
})
export class NuevoProyectoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  selectedState: any = null;

  states: any[] = [
    { name: '1', code: 'Arizona' },
    { name: '2', value: 'California' },
    { name: '3', code: 'Florida' },
    { name: '4', code: 'Ohio' },
    { name: '5', code: 'Washington' },
  ];

  cities1: any[] = [];

  cities2: any[] = [];

  city1: any = null;

  city2: any = null;
}
