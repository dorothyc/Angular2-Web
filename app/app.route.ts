import { Routes, RouterModule } from '@angular/router';

import { FeatureComponent } from './component/feature.component'
import { HomeComponent } from "./component/home.component";
import {PricingComponent} from "./component/pricing.component";
import {AboutComponent} from "./component/about.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'feature',
        component: FeatureComponent
    },
    {
        path: 'pricing',
        component: PricingComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
]

export const routing = RouterModule.forRoot(routes);
