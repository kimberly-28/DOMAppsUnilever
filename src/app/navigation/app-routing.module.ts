import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { DashboardComponent } from '../main/dashboard/dashboard.component';


const routes: Routes = [
    {
        path:'dashboard', component: DashboardComponent
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
