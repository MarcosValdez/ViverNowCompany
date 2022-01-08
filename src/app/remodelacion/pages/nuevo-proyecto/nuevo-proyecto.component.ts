import { Component, OnInit } from '@angular/core';
import { RemodelacionService } from '../../services/remodelacion.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css'],
})
export class NuevoProyectoComponent implements OnInit {
  constructor(private remodService: RemodelacionService) {}

  ngOnInit(): void {
    this.remodService.getAllRemodelaciones().subscribe((x) => console.log(x));
  }
  selectedState: any = null;

  states: any[] = [
    { name: '1', code: 'Arizona' },
    { name: '2', value: 'California' },
    { name: '3', code: 'Florida' },
    { name: '4', code: 'Ohio' },
    { name: '5', code: 'Washington' },
  ];
}
