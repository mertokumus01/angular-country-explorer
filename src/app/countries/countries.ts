import { Observable } from 'rxjs';
import { Component, inject } from '@angular/core';
import { CountryService } from '../country.service';
import { CountryModel } from '../models/country.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-countries',
  imports: [AsyncPipe],
  templateUrl: './countries.html',
  styleUrl: './countries.css',
})
export class Countries {

  private countryService = inject(CountryService);

  countryList : Observable<CountryModel[]> = this.countryService.getCountry();

  consoleLog(){
    console.log("DEneme");
    console.log(this.countryList);
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.consoleLog();
  }

}
