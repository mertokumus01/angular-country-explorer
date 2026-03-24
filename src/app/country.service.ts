import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CountryModel } from './models/country.model';

@Injectable({
  providedIn: 'root',
})
export class CountryService {

  private http = inject(HttpClient);

  private apiUrl = "https://restcountries.com/v3.1/all?fields=name,capital,currencies";

  getCountry(): Observable<CountryModel[]>{
    return this.http.get<CountryModel[]>(this.apiUrl);
  }

  getCountryByName(countryName: string): Observable<CountryModel[]> {
  return this.getCountry().pipe(
    map((countries: CountryModel[]) =>
      countries.filter(c =>
        c.name.common.toLowerCase().includes(countryName.toLowerCase())
      )
    )
  );
}
}
