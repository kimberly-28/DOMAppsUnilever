import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface PeriodicElement {
  agencia?: string;
  incidencia?: number;
  jornada?: number;
  app?: string;
  imageUrl?: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {agencia: 'celaya', incidencia: 5, jornada: 23, app: '3'},
  {agencia: 'celaya', incidencia: 5, jornada: 23, app: '3'},
  {agencia: 'celaya', incidencia: 5, jornada: 23, app: '3'},
  {agencia: 'celaya', incidencia: 5, jornada: 23, app: '3'},
  {agencia: 'celaya', incidencia: 5, jornada: 23, app: '3'},
  {agencia: 'celaya', incidencia: 5, jornada: 27, app: '3'},
  {agencia: 'celaya', incidencia: 5, jornada: 27, app: '3'},
  {agencia: 'celaya', incidencia: 5, jornada: 24, app: '3'},
  {agencia: 'celaya', incidencia: 5, jornada: 24, app: '3'},
  {agencia: 'celaya', incidencia: 5, jornada: 27, app: '3'},
];

const ELEMENT_DATA1: PeriodicElement[] = [
  {imageUrl: "./assets/images/avatars/garry.jpg", incidencia: 5, jornada: 23, app: '3'},
  {imageUrl: "./assets/images/avatars/Velazquez.jpg", incidencia: 5, jornada: 23, app: '3'},
  {imageUrl: "./assets/images/avatars/garry.jpg", incidencia: 5, jornada: 23, app: '3'},
  {imageUrl: "./assets/images/avatars/Velazquez.jpg", incidencia: 5, jornada: 23, app: '3'},
  {imageUrl: "./assets/images/avatars/garry.jpg", incidencia: 5, jornada: 23, app: '3'},
];


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']

  
})
export class EmployeeComponent implements OnInit {

  panelOpenState = false;

  displayedColumns: string[] = ['agencia', 'incidencia', 'jornada', 'app'];
  dataSource = ELEMENT_DATA;

  displayedColumns1: string[] = ['imageUrl', 'incidencia', 'jornada', 'app'];
  dataSource1 = ELEMENT_DATA1;

  toppings = new FormControl();

  toppingList: string[] = ['Agencia Álvaro Obregón', 'Azcapotzalco', 'Benito Juárez', 'Coyoacán', 'Cuauhtémoc', 'Tomato'];

  constructor() { }

  ngOnInit(): void {
  }

}
