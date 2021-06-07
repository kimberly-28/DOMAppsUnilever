import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChartDataSets, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';


export interface PeriodicElement {
  conductor?: string;
  calificacion?: number;
  progress?: number;
  agencia?: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {conductor: 'Roberto Pérez', calificacion: 15, progress: 15},
  {conductor: 'Ana Gómez', calificacion: 40, progress: 40},
  {conductor: 'Juan Zambrano', calificacion: 25, progress: 25},
  {conductor: 'Julio García', calificacion: 30, progress: 30},
  {conductor: 'Alberto Hernández', calificacion: 35, progress: 35},
  {conductor: 'Leonardo Padrón', calificacion: 15, progress: 15},
  {conductor: 'Roberto Pérez', calificacion: 15, progress: 15},
  {conductor: 'Ana Gómez', calificacion: 40, progress: 40},
  {conductor: 'Juan Zambrano', calificacion: 25, progress: 25},
  {conductor: 'Julio García', calificacion: 30, progress: 30},
  {conductor: 'Alberto Hernández', calificacion: 35, progress: 35},
  {conductor: 'Leonardo Padrón', calificacion: 15, progress: 15},
];

const ELEMENT_DATA1: PeriodicElement[] = [
  {agencia: 'Coyoacán', conductor: 'Roberto Pérez', calificacion: 15, progress: 15},
  {agencia: 'Eje Central', conductor: 'Ana Gómez', calificacion: 40, progress: 40},
  {agencia: 'Coyoacán', conductor: 'Juan Zambrano', calificacion: 25, progress: 25},
  {agencia: 'Coyoacán', conductor: 'Julio García', calificacion: 30, progress: 30},
  {agencia: 'Coyoacán', conductor: 'Alberto Hernández', calificacion: 35, progress: 35},
  {agencia: 'Coyoacán', conductor: 'Leonardo Padrón', calificacion: 15, progress: 15},
  {agencia: 'Coyoacán', conductor: 'Roberto Pérez', calificacion: 15, progress: 15},
  {agencia: 'Eje Central', conductor: 'Ana Gómez', calificacion: 40, progress: 40},
  {agencia: 'Coyoacán', conductor: 'Juan Zambrano', calificacion: 25, progress: 25},
  {agencia: 'Coyoacán', conductor: 'Julio García', calificacion: 30, progress: 30},
  {agencia: 'Coyoacán', conductor: 'Alberto Hernández', calificacion: 35, progress: 35},
  {agencia: 'Coyoacán', conductor: 'Leonardo Padrón', calificacion: 15, progress: 15},
];

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']

  
})
export class EmployeeComponent implements OnInit {

  panelOpenState = false;

  displayedColumns: string[] = ['conductor', 'progress', 'calificacion'];
  dataSource = ELEMENT_DATA;

  displayedColumns1: string[] = [ 'conductor', 'agencia', 'progress', 'calificacion'];
  dataSource1 = ELEMENT_DATA1;


  toppings = new FormControl();

  toppingList: string[] = ['Agencia Álvaro Obregón', 'Azcapotzalco', 'Benito Juárez', 'Coyoacán', 'Cuauhtémoc', 'Tomato'];

  constructor() { }

  ngOnInit(): void {
  }

  public lineChartData: ChartDataSets[] = [
  
    { data: [ 3 , 0, 2, 5, 9, 2, 4], label: 'Cantidad de Incidencias'  },
  
  ];

  public lineChartLabels: Label[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo' ];

public lineChartColors: Color[] = [

  { 
    borderColor: 'rgba(63, 207, 65)',
    pointBackgroundColor: 'rgba(63, 207, 65)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  }
];

public lineChartType: ChartType = 'line';

}
