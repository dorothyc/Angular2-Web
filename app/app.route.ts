import { Routes, RouterModule } from '@angular/router';

import { TabOneComponent } from './component/tabone.component'
import { PendingComponent } from "./component/pending.component";
import {TabTwoComponent} from "./component/tabtwo.component";
import {TabThreeComponent} from "./component/tabthree.component";
import {IdComponent} from "./component/id.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/pending',
        pathMatch: 'full'
    },
    {
        path: 'pending',
        component: PendingComponent
    },
    {
        path: 'tabone',
        component: TabOneComponent
    },
    {
        path: 'tabtwo',
        component: TabTwoComponent
    },
    {
        path: 'tabthree',
        component: TabThreeComponent
    },
    {
      path: 'id',
      component: IdComponent
    }
]

export const routing = RouterModule.forRoot(routes);
