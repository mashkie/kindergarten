import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './container/dashboard.component';
import { DataComponent } from './components/data/data.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [DashboardComponent, DataComponent, ButtonComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
