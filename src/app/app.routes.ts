import { Routes } from '@angular/router';
import { AddElementComponent } from './components/add-element/add-element.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    {path: 'addElement', component: AddElementComponent},
    {path: 'dashboard', component: DashboardComponent}
];
