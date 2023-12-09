import { Component } from '@angular/core';
import { DashboardService } from '../../../services/dashboard-service/dashboard-service';
import { DashboardListItem } from '../../models/dashboard-list-item-model';
import { Observable } from 'rxjs/internal/Observable';
import { AsyncPipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dashboard-list',
  standalone: true,
  imports: [AsyncPipe, NgbModule],
  templateUrl: './dashboard-list.component.html',
  styleUrl: './dashboard-list.component.css',
  providers: [DashboardService]
})
export class DashboardListComponent {
  
  constructor(private dashboardService: DashboardService){}

  public items$: Observable<DashboardListItem[]> = this.dashboardService.items$;
  public clickedItem$: BehaviorSubject<DashboardListItem> = new BehaviorSubject<DashboardListItem>({} as unknown as DashboardListItem);
  
  public onClickElement(item: DashboardListItem)
  {
    this.clickedItem$.next(item);
  }
}
