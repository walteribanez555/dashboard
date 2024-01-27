import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'platform',
})
export class TokensService {
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.localStorage = document.defaultView?.localStorage;
  }

  localStorage : any;


  getToken(): string | null {
    if (this.localStorage) {
      return this.localStorage.getItem('Authorization');
    }
    throw ('No Browser');
  }

  deleteToken() {
    if (this.localStorage) {
      this.localStorage.removeItem('Authorization');
      return;
    }
    throw ('No Browser');
  }

  setToken(token: string) {
    if (this.localStorage) {
      this.deleteToken();
      this.localStorage.setItem('Authorization', token);
      return;
    }
    throw ('No Browser');


  }
}
