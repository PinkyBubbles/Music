import { Component } from '@angular/core';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';
import { DashboardItemDetailsComponent } from "./dashboard-item-details/dashboard-item-details.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [DashboardListComponent, DashboardItemDetailsComponent]
})
export class DashboardComponent {

}
