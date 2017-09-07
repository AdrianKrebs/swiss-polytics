import { Routes, RouterModule }  from '@angular/router';

import { Profil } from './profil.component';


// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Profil,
    children: [
    ]
  }
];

export const routing = RouterModule.forChild(routes);
