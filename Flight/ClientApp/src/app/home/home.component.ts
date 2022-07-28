import { Component } from '@angular/core';
import { ModelFlight } from '../Model/model-flight';
import { UtilityService } from '../Services/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public Flights: ModelFlight[] = [];

  constructor(
    public _utilityService : UtilityService
  ) { }

  ngOnInit() {
    this.populateTableFligth();

    setInterval(() => {
      this.populateTableFligth()
    },4000);
  } 

  populateTableFligth() {
    this.Flights.splice(0, this.Flights.length);    
    for (var i = 0; i < 10; i++) {
      this.Flights.push({
        destination: this._utilityService.generateDestination().toLocaleUpperCase(),
        Flight: this._utilityService.generateChar(2) + " " + this._utilityService.generateNumber(4).toString(),
        gate: this._utilityService.generateChar(2) + this._utilityService.generateNumber(2).toString(),
        time: this._utilityService.generateTime()
      })
    }
  }
}


