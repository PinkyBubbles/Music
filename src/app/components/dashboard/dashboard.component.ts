import { Component, Input } from '@angular/core';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';
import { DashboardItemDetailsComponent } from "./dashboard-item-details/dashboard-item-details.component";
import { DashboardListItem } from '../models/dashboard-list-item-model';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [DashboardListComponent, DashboardItemDetailsComponent]
})
export class DashboardComponent {
    public selectedItem: DashboardListItem = {} as DashboardListItem;
    public selectNewItem(item: DashboardListItem): void{
        this.selectedItem = item;
    }
}
