import {Routes, RouterModule} from '@angular/router';

import {Party} from './party.component';
import {ModuleWithProviders} from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {path: ':id', component: Party},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
