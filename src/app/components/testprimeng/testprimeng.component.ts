import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testprimeng',
  templateUrl: './testprimeng.component.html',
  styleUrls: ['./testprimeng.component.css'],
})
export class TestprimengComponent implements OnInit {
  value: Date;
  //texto de prueba
  constructor() {
    // this.value = new Date();
  }

  ngOnInit(): void {}
}
