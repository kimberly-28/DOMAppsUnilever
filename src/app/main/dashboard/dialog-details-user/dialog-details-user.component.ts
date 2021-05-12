import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

export interface PeriodicElement {
  usuario: string;
  entrada: string;
  salida: string;
  ubicacion: string;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  { usuario: 'Juan Gomez', entrada: '8:00 am',  salida: '7: 00 pm', ubicacion: 'Eje Central',  },
  { usuario: 'José Perez', entrada: '8:30 am', salida: '7: 00 pm' , ubicacion: 'Eje Central', },
  { usuario: 'Alberto González', entrada: '8:00 am', salida: '7: 00 pm',  ubicacion: 'Eje Central', },
  { usuario: 'Julio Aparicio', entrada: '8:00 am', salida: '7: 00 pm',  ubicacion: 'Eje Central', },
];


@Component({
  selector: 'app-dialog-details-user',
  templateUrl: './dialog-details-user.component.html',
  styleUrls: ['./dialog-details-user.component.scss']
})
export class DialogDetailsUserComponent implements OnInit {

  displayedColumns: string[] = ['usuario', 'entrada', 'salida', 'ubicacion', ];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
