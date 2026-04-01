import { Component, computed, inject, signal, OnInit } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { CountryService } from '../country.service';
import { CountryModel } from '../models/country.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-countries',
  imports: [FormsModule,KeyValuePipe],
  templateUrl: './countries.html',
  styleUrl: './countries.css',
})
export class Countries implements OnInit {
  private countryService = inject(CountryService);

  countryName = signal('');
  countryList = signal<CountryModel[]>([]);

  ngOnInit() {
  this.search();
  }

  search() {
    // Signal'dan kullanıcı tarafından girilen ülke adını al
    const name = this.countryName();

    // Eğer arama kutusunda metin girildiyse
    if (name.length > 0) {
      // Spesifik ülkeyi ara ve sonucu countryList signal'ına aktar
      this.countryService.getCountryByName(name)
        .subscribe(res => this.countryList.set(res));
    } else {
      // Arama kutusunda hiç metin yoksa tüm ülkeleri getir
      this.countryService.getCountry()
        .subscribe(res => this.countryList.set(res));
    }
  }
}
