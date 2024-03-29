import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { EquipoComponent } from './equipo/equipo.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'categoria',
                component: CategoriaComponent
            },
            {
                path: 'equipo',
                component: EquipoComponent
            }
            /*{
                path: 'charts',
                loadChildren: './charts/charts.module#ChartsModule'
            },
            {
                path: 'components',
                loadChildren:
                    './material-components/material-components.module#MaterialComponentsModule'
            },
            {
                path: 'forms',
                loadChildren: './forms/forms.module#FormsModule'
            },
            {
                path: 'grid',
                loadChildren: './grid/grid.module#GridModule'
            },
            {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule'
            },
            {
                path: 'blank-page',
                loadChildren: './blank-page/blank-page.module#BlankPageModule'
            }*/
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
