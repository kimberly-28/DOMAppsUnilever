import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { AppRoutingModule } from './navigation/app-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from '@angular/material/badge';
import { DialogDetailsUserComponent } from './main/dashboard/dialog-details-user/dialog-details-user.component';
import {  MatDialogModule } from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { AgenciesComponent } from './main/agencies/agencies.component';
import { ChartsModule } from 'ng2-charts';
import { MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenavModule } from '@angular/material/sidenav';
import { NgClass } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { EmployeeComponent } from './main/employee/employee.component';

const appRoutes: Routes = [
    {
        path      : '**',
        redirectTo: 'dashboard'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        DialogDetailsUserComponent,
        AgenciesComponent,
        EmployeeComponent,
    ],

    entryComponents: [
    DialogDetailsUserComponent,
    ],

    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
        TranslateModule.forRoot(),

        // Material
        MatMomentDateModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatTableModule,
        MatBadgeModule,
        MatDialogModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatCardModule,
        MatFormFieldModule,
        MatPaginatorModule,
        
        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,
        // App modules
        LayoutModule,

        //Chart
        ChartsModule,
    ],
    bootstrap   : [
        AppComponent,
        
    ],

})

export class AppModule
{ 
}
