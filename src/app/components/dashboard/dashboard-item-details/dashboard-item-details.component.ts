import {Component, Input} from '@angular/core';
import {DashboardListItem} from '../../models/dashboard-list-item-model';
import {CommonModule, NgFor} from '@angular/common';

@Component({
  selector: 'app-dashboard-item-details',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './dashboard-item-details.component.html',
  styleUrl: './dashboard-item-details.component.css',
})
export class DashboardItemDetailsComponent {
  @Input()
  public item: DashboardListItem | undefined;
}
