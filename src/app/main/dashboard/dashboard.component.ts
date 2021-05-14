import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StringChain } from 'lodash';
import { DialogEmployeeDetailComponent } from '../employee-detail/dialog-employee-detail/dialog-employee-detail.component';
import { DialogDetailsUserComponent } from './dialog-details-user/dialog-details-user.component';

export interface PeriodicElement {
  usuario?: string;
  alerta?: string
  velocidad?: string;
  ubicacion?: string;
  fecha?: string;
  entrada?: string;
  salida?: string;
  detalle?: string;
  ingreso?: string; 
  actividad?: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { usuario: 'Juan Gomez', alerta: 'Detección de Llamada', velocidad: '30 km/h', ubicacion: 'Eje Central', fecha: '14/05/2021', detalle: 'Uso de: Llamada. Duración: 40 min. Número: 442 458 63 25 '},
  { usuario: 'José Perez', alerta: 'Detección de App', velocidad: '35 km/h',ubicacion: 'Eje Central', fecha: '14/05/2021', detalle: 'Uso de: Instagram. Duración: 40 min.'},
   { usuario: 'Alberto González', alerta: 'Detección de Llamada', velocidad: '45 km/h',ubicacion: 'Eje Central', fecha: '14/05/2021', detalle: 'Uso de: Llamada. Duración: 30 min. Número: 442 898 54 74 '},
   { usuario: 'Julio Aparicio', alerta: 'Detección de velocidad', velocidad: '145 km/h',ubicacion: 'Eje Central', fecha: '14/05/2021', detalle: 'Exceso de Velocidad'},
];

const ELEMENT_DATA2: PeriodicElement[] = [
  { usuario: 'Juan Gomez', entrada: '8:00 am',  ubicacion: 'Eje Central' },
  { usuario: 'José Perez', entrada: '8:30 am', ubicacion: 'Eje Central', },
  // { usuario: 'Alberto González', entrada: '8:00 am', ubicacion: 'Eje Central', },
  // { usuario: 'Julio Aparicio', entrada: '8:00 am', ubicacion: 'Eje Central', },
];

const ELEMENT_DATA3: PeriodicElement[] = [
  { usuario: 'Juan Gomez', salida: '7:00 pm',  ubicacion: 'Eje Central' },
  { usuario: 'José Perez', salida: '7:00 pm', ubicacion: 'Eje Central', },
  // { usuario: 'Alberto González', salida: '7:00 pm', ubicacion: 'Eje Central', },
  // { usuario: 'Julio Aparicio', salida: '7:00 pm', ubicacion: 'Eje Central', },
];

const ELEMENT_DATA4: PeriodicElement[] = [
  { usuario: 'Juan Gomez', ingreso: '8:00 am',  actividad: 'Uso de: Instagram. Duración: 45 min',  velocidad: '140 km/h', },
  { usuario: 'José Perez', ingreso: '8:30 am', actividad: 'Sin actividad' , velocidad: '90 km/h',},
   { usuario: 'Alberto González', ingreso: '8:00 am', actividad: 'Uso de: Llamada. Duración: 20 min',  velocidad: '130 km/h',},
   { usuario: 'Julio Aparicio', ingreso: '8:00 am', actividad: 'Sin actividad',  velocidad: '85 km/h',},
];


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    panelOpenState = false;

  displayedColumns: string[] = ['usuario', 'alerta', 'velocidad', 'ubicacion', 'fecha', 'detalle'];
  dataSource = ELEMENT_DATA;

  displayedColumns2: string[] = ['usuario', 'entrada', 'ubicacion'];
  dataSource2 = ELEMENT_DATA2;

  displayedColumns3: string[] = ['usuario', 'salida', 'ubicacion'];
  dataSource3 = ELEMENT_DATA3;

  displayedColumns4: string[] = ['usuario', 'ingreso', 'actividad', 'velocidad'];
  dataSource4 = ELEMENT_DATA4;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogDetailsUser()
  {
    this.dialog.open(DialogDetailsUserComponent);
  }

  openDialogEmployeeDetail() {
    this.dialog.open(DialogEmployeeDetailComponent);
  }

}
