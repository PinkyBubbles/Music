import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DashboardListItem } from '../../models/dashboard-list-item-model';
import { CommonModule, NgFor } from '@angular/common';
import { DashboardService } from '../../../services/dashboard-service/dashboard-service';

@Component({
  selector: 'app-dashboard-item-details',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './dashboard-item-details.component.html',
  styleUrl: './dashboard-item-details.component.css',
  providers: [DashboardService]
})
export class DashboardItemDetailsComponent implements OnChanges{
  constructor(private changeDetector: ChangeDetectorRef){}
  @Input()
  public currentItem: DashboardListItem = {} as DashboardListItem;
  public ngOnChanges(changes: SimpleChanges): void {
    this.changeDetector.detectChanges();
  }
}
