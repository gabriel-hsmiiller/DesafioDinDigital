import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CardsService extends BaseService {

  env = environment;

  constructor(private http: HttpClient) {
    super(http);
  }

  getCards(){
    const url = `${this.env.baseUrl}${this.env.endpoints.cards}`;
    return super.get<any>(url);
  }
}
