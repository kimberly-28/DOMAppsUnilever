import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { DashboardComponent } from '../main/dashboard/dashboard.component';
import { AgenciesComponent } from '../main/agencies/agencies.component';
import { EmployeeComponent } from '../main/employee/employee.component';

const routes: Routes = [
    {
        path:'dashboard', component: DashboardComponent
    },
    {
        path:'agencies', component: AgenciesComponent
    },
    {
        path:'employee', component: EmployeeComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes),
        TranslateModule,
        FuseSharedModule],
    exports: [RouterModule]
  })


export class AppRoutingModule
{
}
