import { Injectable } from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {DashboardListItem} from "../models/dashboard-list-item-model";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  public items$: Observable<DashboardListItem[]> = this.temporalItemFiller();

  constructor(){}

  private temporalItemFiller(): Observable<DashboardListItem[]>{
    return of([{id:1, name: "name1", artist: "artist1", songs: ["song1", "song2"], releaseDate: new Date()}, {id: 2, name: "name2", artist: "artist1", songs: ["song1", "song2", "song3"], releaseDate: new Date()}, {id: 3, name: "name3", artist: "artist1", songs: ["song1", "song2", "foo", "bar", "baz"], releaseDate: new Date()}, {id: 4, name: "name4", artist: "artist1", songs: ["song1", "song2"], releaseDate: new Date()}, {id: 5, name: "name5", artist: "artist1", songs: ["song1", "song2"], releaseDate: new Date()}]);
  }
}
