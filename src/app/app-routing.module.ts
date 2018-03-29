import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppCarouselComponent } from './app-carousel/app-carousel.component';
import { AuthGuardService } from './auth/providers/auth-guard/auth-guard.service';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  routes: Routes = [
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
              component: AppCarouselComponent
              // resolve: { searchResults: SearchResultsResolver }
            }
          ]
        }
      ]
    }
  ];
}
