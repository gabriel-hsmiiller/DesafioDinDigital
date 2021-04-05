import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private _http: HttpClient ) { }

  protected get<T>(url: string) {
    return this._http.get<T>(url);
  }

  protected post<T>(url: string, body: object) {
    return this._http.post<T>(url, JSON.stringify(body));
  }

  protected put<T>(url: string, body: object) {
    return this._http.put<T>(url, JSON.stringify(body));
  }

  protected delete<T>(url: string) {
    return this._http.delete<T>(url);
  }

}
