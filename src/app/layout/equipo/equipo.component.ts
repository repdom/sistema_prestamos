import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Categoria } from '../categoria/categoria.component';
import swal from 'sweetalert2';


export class SubCategory {
  id: number;
  name: string;
  category: Categoria = new Categoria();
}

export class Equipo {
  id: number;
  name: string;
  quantity: number;
  costxday: number;
  subCategory: SubCategory = new SubCategory();
  image = 'https://i.imgur.com/5qqFPl4.png';
}

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit {
  public equipos: Equipo[] = [];
  public nuevoEquipo: Equipo = new Equipo();
  dataSource: MatTableDataSource<Equipo>;
  actualizar = false;
  displayedColumns = ['name', 'quantity', 'costxday', 'actions'];

  constructor() { }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  changeListener($event, equipo: Equipo): void {
    this.readThis($event.target, equipo);
  }
  readThis(inputValue: any, equipo: Equipo): void {
    // tslint:disable-next-line:prefer-const
    let file: File = inputValue.files[0];
    // tslint:disable-next-line:prefer-const
    let myReader: FileReader = new FileReader();

    // tslint:disable-next-line:prefer-const
    let pattern = /image-*/;
    if (!file.type.match(pattern)) {
      swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Debe de elegir una imagen',
      });
      return;
    }
    myReader.onloadend = (e) => {
      equipo.image =  String(myReader.result);
    };
    myReader.readAsDataURL(file);
  }
  editarItem(equipo: Equipo) {
    this.actualizar = true;
    this.nuevoEquipo = equipo;
  }
  cancelar() {
    this.actualizar = false;
    this.nuevoEquipo = new Equipo();
  }

}
