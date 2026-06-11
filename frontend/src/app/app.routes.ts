import { Routes } from '@angular/router';
import { ServicesLayout } from './layouts/services.layout/services.layout';
import { Catering } from './services/catering/catering';
import { Event } from './services/event/event';
import { Fashion } from './services/fashion/fashion';
import { Home } from './home/home';
import { ServicesHome } from './services/services.home/services.home';

export const routes: Routes = [
    {
        path: 'services', component: ServicesLayout, children:[
            {path: 'catering', component: Catering},
            {path: 'event', component: Event},
            {path: 'fashion', component: Fashion},
            {path: '', component: ServicesHome}
        ] 

    },

    {path: '', component: Home, },
    { path: '', redirectTo: '', pathMatch: 'full' },
];
