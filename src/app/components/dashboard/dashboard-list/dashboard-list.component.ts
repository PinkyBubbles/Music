import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DashboardListItem} from '../../models/dashboard-list-item-model';
import {AsyncPipe} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-dashboard-list',
  standalone: true,
  imports: [AsyncPipe, NgbModule, FormsModule],
  templateUrl: './dashboard-list.component.html',
  styleUrl: './dashboard-list.component.css',
})
export class DashboardListComponent {
  @Input()
  public items: DashboardListItem[] | null = null;

  @Output()
  public selectedItem: EventEmitter<DashboardListItem> = new EventEmitter();

  public onItemClick(item: DashboardListItem): void{
    this.selectedItem.emit(item);
  }
}
