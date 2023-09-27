import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable, of, tap } from 'rxjs';
import { Child } from '../models/child.model';
import { Kindergarden } from '../models/kindergarden.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  children$: Observable<Child[]> = of();
  kindergardens$: Observable<Kindergarden[]> = of();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.children$ = this.dataService.getChildren();
    this.kindergardens$ = this.dataService.getKindergardens();
  }

  createChild(child: Child): void {
    this.dataService.createChild(child);
  }
}
