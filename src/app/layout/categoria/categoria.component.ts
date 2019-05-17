import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms/src/directives';
import { MatTableDataSource } from '@angular/material';

export class Categoria {
  codigo: number;
  nombre: string;
  definicion: string;
}

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {
  public items: Categoria[] = [];
  public nuevoItem: Categoria = new Categoria();
  dataSource: MatTableDataSource<Categoria>;
  actualizar = false;
  displayedColumns = ['nombre', 'definicion', 'acciones'];

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

}
