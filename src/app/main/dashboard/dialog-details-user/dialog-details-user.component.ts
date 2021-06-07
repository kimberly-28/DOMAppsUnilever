import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { BaseChartDirective, Label, MultiDataSet } from 'ng2-charts';
import * as pluginDataLabels from 'ng2-charts';

export interface PeriodicElement {
  usuario: string;
  ingreso: string;
  actividad: string;
  velocidad: string;
  imageUrl:  string;
  symbol: boolean;
  }

const ELEMENT_DATA: PeriodicElement[] = [
  { usuario: 'Juan Gomez',  imageUrl: "./assets/images/avatars/garry.jpg", ingreso: '10/10/2018',  actividad: 'Uso de: Instagram. Duración: 45 min',  velocidad: '140 km/h' , symbol: false },
  { usuario: 'José Perez', imageUrl: './assets/images/avatars/Abbott.jpg', ingreso: '10/10/2018', actividad: 'Sin actividad' , velocidad: '90 km/h' , symbol: true},
  { usuario: 'Alberto González', imageUrl: './assets/images/avatars/Velazquez.jpg', ingreso: '10/10/2018', actividad: 'Uso de: Llamada. Duración: 20 min',  velocidad: '130 km/h', symbol: false },
  { usuario: 'Julio Aparicio',  imageUrl: './assets/images/avatars/Arnold.jpg',ingreso: '10/10/2018', actividad: 'Sin actividad',  velocidad: '85 km/h' , symbol: true},
];

@Component({
  selector: 'app-dialog-details-user',
  templateUrl: './dialog-details-user.component.html',
  styleUrls: ['./dialog-details-user.component.scss']
})
export class DialogDetailsUserComponent implements OnInit {

  displayedColumns: string[] = [ 'imageUrl', 'usuario', 'ingreso', 'actividad', 'velocidad', 'symbol' ];
  dataSource = ELEMENT_DATA;

  //// LINE CHART

  public lineChartData: ChartDataSets[] = [

    { data: [ 3, 4, 2, 5, 9, 2, 6], label: 'Total Incidencias en el día' },
  ];

  public lineChartLabels: Label[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo' ];
 
  public lineChartType: ChartType = 'line';
  
  //BAR CHART

@ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

public barChartLabels: Label[] = ['7-9', '9-11', '11-13', '13-15', '15-17', '17-19:30', 'Después 19:30'];
public barChartType: ChartType = 'bar';
public barChartLegend = true;
public barChartPlugins = [pluginDataLabels];

public barChartData: ChartDataSets[] = [
  { data: [65, 80, 81, 59,  56, 55, 40, 20], label: 'Horario de uso de Apps' },
];


/// DOUGHNUT CHART

public doughnutChartLabels: Label[] = ['Disciplina', 'Cumplimiento de Jornada', 'Incumplimiento de Jornada'];
public doughnutChartData: MultiDataSet = [
  [43 , 38, 19],
];

public doughnutChartType: ChartType = 'doughnut';

// events
public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}
 
public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

  constructor() { }

  ngOnInit(): void {
  }

}

 
