import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { DataComponent } from '../components/data/data.component';
import { ButtonComponent } from '../components/button/button.component';

describe('DashboardComponent', () => {
  let fixture: ComponentFixture<DashboardComponent>;
  let component: DashboardComponent;
  let spectator: Spectator<DashboardComponent>;

  const createComponent = createComponentFactory({
    component: DashboardComponent,
    declarations: [DataComponent, ButtonComponent],
    imports: [],
    providers: [],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
    fixture = spectator.fixture;
    spectator.detectChanges();
  });

  it('should render the component', () => {
    expect(fixture).toMatchSnapshot();
  });
});
