import { ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let spectator: Spectator<AppComponent>;

  const createComponent = createComponentFactory({
    component: AppComponent,
    declarations: [HeaderComponent],
    imports: [RouterTestingModule],
    providers: [],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
    fixture = spectator.fixture;
    spectator.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
