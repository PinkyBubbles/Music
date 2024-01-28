import { Component, Input, OnInit } from '@angular/core';
import { DashboardListItem } from '../../models/dashboard-list-item-model';
import { CommonModule, NgFor } from '@angular/common';
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
  private _item: DashboardListItem = {} as DashboardListItem;
  @Input()
  set item(item: DashboardListItem){
    this._item = item;
  } 
  get item(){
    return this._item;
  } 
}
