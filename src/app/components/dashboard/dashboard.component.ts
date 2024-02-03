import {Component, inject} from '@angular/core';
import {DashboardListComponent} from './dashboard-list/dashboard-list.component';
import {DashboardItemDetailsComponent} from "./dashboard-item-details/dashboard-item-details.component";
import {DashboardListItem} from '../models/dashboard-list-item-model';
import {DashboardService} from "./dashboard.service";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [DashboardListComponent, DashboardItemDetailsComponent, AsyncPipe]
})
export class DashboardComponent {
  public item: DashboardListItem | undefined;

  private readonly _dashboardService = inject(DashboardService);
  public readonly item$ = this._dashboardService.items$;

  public selectNewItem(item: DashboardListItem): void {
    this.item = item;
  }
}
