import { Component } from '@angular/core';
import { DashboardListItem } from '../../models/dashboard-list-item-model';
import { CommonModule, NgFor } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { DashboardListComponent } from '../dashboard-list/dashboard-list.component';

@Component({
  selector: 'app-dashboard-item-details',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './dashboard-item-details.component.html',
  styleUrl: './dashboard-item-details.component.css',
  providers: [DashboardListComponent]
})
export class DashboardItemDetailsComponent{

  constructor(private dashboardList: DashboardListComponent){}

  item$: BehaviorSubject<DashboardListItem> = this.dashboardList.clickedItem$;
}
