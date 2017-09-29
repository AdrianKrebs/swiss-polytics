import { Routes, RouterModule }  from '@angular/router';

import { Parliament } from './parliament.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: Parliament,
    children: [
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
