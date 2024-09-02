import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appPath } from '../app-path.const';
import type { DefaultResponse } from '../models/common';

//Run Chrome browser without CORS
//Add new shortcut, set the target as "[PATH_TO_CHROME]\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=%LOCALAPPDATA%\Google\chromeTemp
export const apiUrl = 'https://www.travel.taipei/open-api/zh-tw';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  readonly path = appPath;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<DefaultResponse>(apiUrl + '/Attractions/All').pipe();
  }
}
