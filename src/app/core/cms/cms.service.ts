import { Injectable }                             from '@angular/core';
import { HttpClient }                             from '@angular/common/http';
import { cmsBaseUrl, languages, defaultLanguage } from '../../app.config';

@Injectable({
  providedIn: 'root'
})
export class CMSService {
  private _cmsBaseUrl = cmsBaseUrl;
  private _currentLanguage = defaultLanguage;

  constructor (private _HttpClient: HttpClient) {}

  getContent () {
    return this._HttpClient.get(`${this._cmsBaseUrl}`);
  }

  set currentLanguage (languageCode: string) {
    try {
      this._currentLanguage = languages.find(language => language.code === languageCode).code;
    } catch (e) {
      console.warn(`Language '${languageCode}' not defined.`);
    }
  }

  get currentLanguage () {
    return this._currentLanguage;
  }

  getContentFromKey (key: any) {
    if (typeof key === 'string') {
      return key;
    }

    return key[this.currentLanguage] ? key[this.currentLanguage] : ``;
  }
}
