import { Routes, RouterModule } from '@angular/router';

import { Politician } from './politician.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: ':id',
    component: Politician,
    children: [
    ],
  },
];

export const routing = RouterModule.forChild(routes);
