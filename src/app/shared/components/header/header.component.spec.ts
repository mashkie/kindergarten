import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let spectator: Spectator<HeaderComponent>;

  const createComponent = createComponentFactory({
    component: HeaderComponent,
    declarations: [],
    imports: [],
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
