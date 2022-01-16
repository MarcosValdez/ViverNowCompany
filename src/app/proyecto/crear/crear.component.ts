import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css'],
})
export class CrearComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  selectedState: any = null;

  states: any[] = [
    { name: 'Construcción' },
    { name: 'Remodelación' },
    { name: 'Remate Judicial' },
  ];
}
