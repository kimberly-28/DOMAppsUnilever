import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective, Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import * as pluginDataLabels from 'chart.js';
import { MatDialog } from '@angular/material/dialog';
import { DialogDetailsUserComponent } from '../dashboard/dialog-details-user/dialog-details-user.component';
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
  {imageUrl: "./assets/images/avatars/garry.jpg", incidencia: 5, jornada: 23, app: '3'},
  {imageUrl: "./assets/images/avatars/garry.jpg", incidencia: 5, jornada: 23, app: '3'},
  {imageUrl: "./assets/images/avatars/garry.jpg", incidencia: 5, jornada: 23, app: '3'},
];

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.scss']
})

export class AgenciesComponent implements OnInit {

  panelOpenState = false;

  displayedColumns: string[] = ['agencia', 'incidencia', 'jornada', 'app'];
  dataSource = ELEMENT_DATA;

  displayedColumns1: string[] = ['imageUrl', 'incidencia', 'jornada', 'app'];
  dataSource1 = ELEMENT_DATA1;

  toppings = new FormControl();

  toppingList: string[] = ['Álvaro Obregón', 'Azcapotzalco', 'Benito Juárez', 'Coyoacán', 'Cuauhtémoc', 'Tomato'];

  toppingList1: string[] = ['NorOeste', 'NorOeste', 'Occidente', 'Oriente', 'CentroNorte', 'CentroSur', 'SurOeste', 'SurEste'];

//// LINE CHART

  public lineChartData: ChartDataSets[] = [

    { data: [ 3, 4, 2, 5, 9, 2, 6], label: 'Total Incidencias en el día' },
  ];

  public lineChartData1: ChartDataSets[] = [

    { data: [5, 9, 2, 6, 3, 4, 2, ], label: 'Total Incidencias en el día' },
  ];

  public lineChartData2: ChartDataSets[] = [

    { data: [ 2, 5, 9, 3, 4, 2, 6], label: 'Total Incidencias en el día' },
  ];

  public lineChartData3: ChartDataSets[] = [

    { data: [ 3, 4, 2, 5, 6, 3, 4 ], label: 'Total Incidencias en el día' },
  ];

  public lineChartData4: ChartDataSets[] = [

    { data: [ 3, 4, 2, 5, 9, 2, 6], label: 'Total Incidencias en el día' },
  ];

  public lineChartData5: ChartDataSets[] = [

    { data: [ 3, 4, 2, 5, 2, 5, 9], label: 'Total Incidencias en el día' },
  ];

  public lineChartLabels: Label[] = ['L', 'M', 'M', 'J', 'V', 'S', 'D' ];
 
  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
  

///BAR CHART

  public barChartLabels: Label[] = ['Check In', 'Check Out', ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [30, 25, 20, 25, 30, 35], label: 'Jornada Laboral' }
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

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogDetailsUser() {
    this.dialog.open(DialogDetailsUserComponent);
  }
}


