import { NgModule, ModuleWithProviders } from '@angular/core';
import { AuthorizationDataService } from './authorization-data/authorization-data.service';
import { AuthorizationService } from './authorization/authorization.service';
import { AuthGuardService } from './auth-guard/auth-guard.service';

@NgModule()
export class AuthProvidersModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthProvidersModule,
      providers: [
        AuthorizationService,
        AuthorizationDataService,
        AuthGuardService
      ]
    };
  }
}
