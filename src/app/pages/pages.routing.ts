import { Routes, RouterModule } from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'parliament', loadChildren: './parliament/parliament.module#ParliamentModule' },
      { path: 'party', loadChildren: './party/party.module#PartyModule' },
      { path: 'politician',  loadChildren: './politician/politician.module#PoliticianModule' },
      { path: 'about', loadChildren: './about/about.module#AboutModule' },
    ],
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
