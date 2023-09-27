import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './container/dashboard.component';
import { DataComponent } from './components/data/data.component';
import { ButtonComponent } from './components/button/button.component';
import { AddDataComponent } from './components/add-data/add-data.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AgePipe } from './pipes/age.pipe';
import { HttpClientModule } from '@angular/common/http';
import { KindergardenPipe } from './pipes/kindergarden.pipe';

@NgModule({
  declarations: [
    DashboardComponent,
    DataComponent,
    ButtonComponent,
    AddDataComponent,
    AgePipe,
    KindergardenPipe,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class DashboardModule {}
