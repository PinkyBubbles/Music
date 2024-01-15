import { Component, EventEmitter, Output } from '@angular/core';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';
import { DashboardItemDetailsComponent } from "./dashboard-item-details/dashboard-item-details.component";
import { DashboardListItem } from '../models/dashboard-list-item-model';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [DashboardListComponent, DashboardItemDetailsComponent]
})
export class DashboardComponent {
    @Output()
    dashboardListItem$: EventEmitter<DashboardListItem> = new EventEmitter<DashboardListItem>();

    public onClickDashboardItem(value: DashboardListItem): void
    {
        this.dashboardListItem$.emit(value);
    }
}
