import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FeatureComponent } from './component/feature.component'

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: AppComponent
    },
    {
        path: 'feature',
        component: FeatureComponent
    }
]

export const routing = RouterModule.forRoot(routes);