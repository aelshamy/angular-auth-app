import { NgModule } from '@angular/core';
import { HideIfUnauthorizedDirective } from './hide-if-unauthorized/hide-if-unauthorized.directive';
import { DisableIfUnauthorizedDirective } from './disable-if-unauthorized/disable-if-unauthorized.directive';

NgModule({
  declarations: [HideIfUnauthorizedDirective, DisableIfUnauthorizedDirective],

  exports: [HideIfUnauthorizedDirective, DisableIfUnauthorizedDirective]
});
