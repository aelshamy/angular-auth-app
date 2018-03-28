import { Directive, ElementRef, OnInit, Input } from '@angular/core';
import { AuthorizationService } from '../../providers/authorization.service';
import { AuthGroup } from '../../providers/authorization.types';

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
