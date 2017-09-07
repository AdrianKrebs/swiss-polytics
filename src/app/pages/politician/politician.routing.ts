import { Routes, RouterModule }  from '@angular/router';

import { Politician } from './politician.component';
import { Profil } from './profil/profil.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Politician,
    children: [
      // { path: 'buttons', component: Profil },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
