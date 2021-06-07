import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective, Color, Label, MultiDataSet } from 'ng2-charts';
import { DialogDetailsUserComponent } from './dialog-details-user/dialog-details-user.component';
import * as pluginDataLabels from 'ng2-charts';
import Swal from 'sweetalert2'

export interface PeriodicElement {
  agencia?: string;
  incidencia?: number;
  jornada?: number;
  app?: string;
  imageUrl?: string;
}

const ELEMENT_DATA1: PeriodicElement[] = [
  {imageUrl: "./assets/images/avatars/garry.jpg", incidencia: 5, jornada: 23, app: '3'},
  {imageUrl: "./assets/images/avatars/garry.jpg", incidencia: 5, jornada: 23, app: '3'},
  {imageUrl: "./assets/images/avatars/garry.jpg", incidencia: 5, jornada: 23, app: '3'},
  {imageUrl: "./assets/images/avatars/garry.jpg", incidencia: 5, jornada: 23, app: '3'},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  displayedColumns1: string[] = ['agencia', 'incidencia', 'jornada', 'app'];
  dataSource1 = ELEMENT_DATA1;

    
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogDetailsUser() {
    this.dialog.open(DialogDetailsUserComponent);
  }

public lineChartData: ChartDataSets[] = [
  
  { data: [ 3 , 0, 2, 5, 9, 2, 4], label: 'Total Incidencias en el día'   },

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

///BAR CHART

@ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;


public barChartLabels: Label[] = ['7-9', '9-11', '11-13', '13-15', '15-17', '17-19:30', 'Después 19:30'];
public barChartType: ChartType = 'bar';
public barChartLegend = true;
public barChartPlugins = [pluginDataLabels];

public barChartData: ChartDataSets[] = [
  { data: [65, 80, 81, 59,  56, 55, 40, 20], label: 'Horario de uso de Apps' },
];

// DOUGHNUT CHART
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
}

