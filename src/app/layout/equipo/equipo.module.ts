import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
        MatInputModule,
        MatCheckboxModule,
        MatButtonModule,
        MatTabsModule,
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        MatButtonToggleModule,
        MatIconModule,
        MatTreeModule,
        MatGridListModule,
        MatListModule,
        MatExpansionModule,
        MatSortModule,
        MatSelectModule
      } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';
import { EquipoComponent } from './equipo.component';

@NgModule({
  declarations: [EquipoComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTabsModule,
    FlexLayoutModule,
    HttpModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTreeModule,
    MatGridListModule,
    MatListModule,
    MatExpansionModule,
    MatSortModule,
    MatSelectModule,
    TranslateModule,
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ]
})
export class EquipoModule { }
