import { Routes, RouterModule } from '@angular/router';

import { TabOneComponent } from './component/tabone.component'
import { PendingListComponent } from "./component/pendingPage/pendingList.component";
import {TabTwoComponent} from "./component/tabtwo.component";
import {TabThreeComponent} from "./component/tabthree.component";
import {ReviewComponent} from "./component/review.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/pending',
        pathMatch: 'full'
    },
    {
        path: 'pending',
        component: PendingListComponent
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
    path: 'review/:id',
    component: ReviewComponent
  }
]

export const routing = RouterModule.forRoot(routes);
