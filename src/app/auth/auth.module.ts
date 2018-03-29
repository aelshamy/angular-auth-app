import { NgModule } from '@angular/core';
import { AuthProvidersModule } from './providers/auth.providers.module';
import { AuthDirectivesModule } from './directives/auth.directives.module';

@NgModule({
  imports: [AuthProvidersModule.forRoot(), AuthDirectivesModule],
  exports: [AuthProvidersModule, AuthDirectivesModule]
})
export class AuthModule {}
