import { Directive, ElementRef, OnInit, Input } from '@angular/core';
import { AuthGroup } from '../../providers/authorization.types';
import { AuthorizationService } from '../../providers/authorization/authorization.service';

@Directive({
  selector: '[appDisableIfUnauthorized]'
})
export class DisableIfUnauthorizedDirective implements OnInit {
  @Input() appDisableIfUnauthorized: AuthGroup; // Required permission passed in
  constructor(
    private el: ElementRef,
    private authorizationService: AuthorizationService
  ) {}
  ngOnInit() {
    if (
      !this.authorizationService.hasPermission(this.appDisableIfUnauthorized)
    ) {
      this.el.nativeElement.disabled = true;
    }
  }
}
