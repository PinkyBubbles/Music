import { Component, Injectable, Output } from '@angular/core';
import { DashboardService } from '../../../services/dashboard-service/dashboard-service';
import { DashboardListItem } from '../../models/dashboard-list-item-model';
import { Observable } from 'rxjs/internal/Observable';
import { AsyncPipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';

@Injectable()
@Component({
  selector: 'app-dashboard-list',
  standalone: true,
  imports: [AsyncPipe, NgbModule, FormsModule],
  templateUrl: './dashboard-list.component.html',
  styleUrl: './dashboard-list.component.css',
  providers: [DashboardService]
})
export class DashboardListComponent {
  
  constructor(private dashboardService: DashboardService){}

  @Output()
  public clickedItem$: Subject<DashboardListItem> = new Subject<DashboardListItem>();

  public items$: Observable<DashboardListItem[]> = this.dashboardService.items$;

  public onItemClick(item: DashboardListItem)
  {
    this.clickedItem$.next(item);
  }
}
