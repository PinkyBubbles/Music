import { Observable } from 'rxjs/internal/Observable';
import { DashboardListItem } from '../../components/models/dashboard-list-item-model';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'any'})
export class DashboardService{

    //private itemsUrl: string = ""; 
    //public items$: Observable<DashboardListItem[]> = this.http.get<DashboardListItem[]>(this.itemsUrl);
    public items$: Observable<DashboardListItem[]> = this.temportalItemFiller();
    //constructor(private http: HttpClient){}
    constructor(){}

    private temportalItemFiller(): Observable<DashboardListItem[]>{
        return of([{name: "name1", artist: "artist1", songs: ["song1", "song2"], releaseDate: new Date()}, {name: "name2", artist: "artist1", songs: ["song1", "song2"], releaseDate: new Date()}, {name: "name3", artist: "artist1", songs: ["song1", "song2"], releaseDate: new Date()}, {name: "name4", artist: "artist1", songs: ["song1", "song2"], releaseDate: new Date()}, {name: "name5", artist: "artist1", songs: ["song1", "song2"], releaseDate: new Date()}]);
    }
    
}