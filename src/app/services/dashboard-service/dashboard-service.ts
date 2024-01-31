import { Observable } from 'rxjs/internal/Observable';
import { DashboardListItem } from '../../components/models/dashboard-list-item-model';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'any'})
export class DashboardService{

    public items$: Observable<DashboardListItem[]> = this.temportalItemFiller();

    constructor(){}

    private temportalItemFiller(): Observable<DashboardListItem[]>{
        return of([{id:1, name: "name1", artist: "artist1", songs: ["song1", "song2"], releaseDate: new Date()}, {id: 2, name: "name2", artist: "artist1", songs: ["song1", "song2"], releaseDate: new Date()}, {id: 3, name: "name3", artist: "artist1", songs: ["song1", "song2"], releaseDate: new Date()}, {id: 4, name: "name4", artist: "artist1", songs: ["song1", "song2"], releaseDate: new Date()}, {id: 5, name: "name5", artist: "artist1", songs: ["song1", "song2"], releaseDate: new Date()}]);
    }
    
}