import { Component, Input, OnInit } from '@angular/core';
import { DashboardListItem } from '../../models/dashboard-list-item-model';
import { CommonModule, NgFor } from '@angular/common';
import { DashboardListComponent } from '../dashboard-list/dashboard-list.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dashboard-item-details',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './dashboard-item-details.component.html',
  styleUrl: './dashboard-item-details.component.css',
  providers: [DashboardListComponent]
})
export class DashboardItemDetailsComponent implements OnInit{
  @Input()
  item$: Subject<DashboardListItem> = new Subject<DashboardListItem>();
  ngOnInit(): void {
    this.item$.subscribe(() => setTimeout(() => {}, 10));
  }
}
