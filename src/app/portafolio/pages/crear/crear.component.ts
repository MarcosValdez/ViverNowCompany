import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css'],
})
export class CrearComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  display: boolean = false;

  showDialog() {
    this.display = true;
  }
}
