import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  //url = 'https://coronavirus-tracker-api.herokuapp.com/v2/locations?source=jhu';
  url = 'https://disease.sh/v3/covid-19/countries';

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get(this.url).pipe(map(res => res));
  }

}
