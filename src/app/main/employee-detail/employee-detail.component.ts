import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDetailsUserComponent } from '../dashboard/dialog-details-user/dialog-details-user.component';
import { DialogEmployeeDetailComponent } from './dialog-employee-detail/dialog-employee-detail.component';


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
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  displayedColumns: string[] = [ 'imageUrl', 'usuario', 'ingreso', 'actividad', 'velocidad', 'symbol' ];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogEmployeeDetail() {
    this.dialog.open(DialogEmployeeDetailComponent);
  }

}
