import { Component, computed, inject, signal } from '@angular/core';
import { CountryService } from '../country.service';
import { CountryModel } from '../models/country.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-countries',
  imports: [FormsModule],
  templateUrl: './countries.html',
  styleUrl: './countries.css',
})
export class Countries {
  private countryService = inject(CountryService);

  countryName = signal('');
  countryList = signal<CountryModel[]>([]);

  ngOnInit() {
  this.search();
  }

  search() {
    const name = this.countryName();

    if (name.length > 0) {
      this.countryService.getCountryByName(name)
        .subscribe(res => this.countryList.set(res));
    } else {
      this.countryService.getCountry()
        .subscribe(res => this.countryList.set(res));
    }
  }
}
