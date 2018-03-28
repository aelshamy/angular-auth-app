import { AuthGuardService } from '../providers/auth-guard.service';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'feature',
    canActivate: [AuthGuardService], // Could nest parent auth requirements as well as child
    children: [
      {
        path: '',
        data: { auth: 'VIEW_ONLY' },
        children: [
          {
            path: 'searchresults',
            component: SearchResultsComponent,
            resolve: { searchResults: SearchResultsResolver }
          }
        ]
      }
    ]
  }
];
