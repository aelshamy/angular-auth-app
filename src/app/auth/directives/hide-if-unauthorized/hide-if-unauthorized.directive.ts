import { Directive, ElementRef, OnInit, Input } from '@angular/core';
import { AuthGroup } from '../../providers/authorization.types';
import { AuthorizationService } from '../../providers/authorization/authorization.service';

@Directive({
  selector: '[appHideIfUnauthorized]'
})
export class HideIfUnauthorizedDirective implements OnInit {
  @Input() appHideIfUnauthorized: AuthGroup; // Required permission passed in
  constructor(
    private el: ElementRef,
    private authorizationService: AuthorizationService
  ) {}
  ngOnInit() {
    if (!this.authorizationService.hasPermission(this.appHideIfUnauthorized)) {
      this.el.nativeElement.style.display = 'none';
    }
  }
}
