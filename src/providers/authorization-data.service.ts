import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizationDataService {
  constructor() {}
  getPermissions(): Promise<string[]> {
    return new Promise((reslove, reject) => {
      reslove(['VIEW_ONLY']);
    });
  }
}
