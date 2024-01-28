import { Component, Injectable, OnInit, Output } from '@angular/core';
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
export class DashboardListComponent implements OnInit{
  
  constructor(private dashboardService: DashboardService){}

  public itemList: DashboardListItem[] = [];

  @Output()
  selectedItem: Subject<DashboardListItem> = new Subject<DashboardListItem>;

  public ngOnInit(): void {
    this.dashboardService.items$.subscribe(items => this.itemList = items);
  }

  public onItemClick(item: DashboardListItem): void{
    this.selectedItem.next(item);
  }
}
