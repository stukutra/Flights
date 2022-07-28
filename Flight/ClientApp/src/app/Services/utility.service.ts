import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  generateNumber(numNumber: number) {
    const listNumbers = "1234567890"
    let numCompose: string = "";
    for (var i = 0; i < numNumber; i++) {
      numCompose = numCompose + listNumbers[Math.floor(Math.random() * listNumbers.length)];
    }
    return numCompose;
  }

  generateChar(numChar: number) {
    const listChar = "ABCDEFGHILMNOPQRSTUVZ"
    let charCompose: string = "";
    for (var i = 0; i < numChar; i++) {
      charCompose = charCompose + listChar[Math.floor(Math.random() * listChar.length)];
    }
    return charCompose;
  }

  generateDestination() {
    const listDestination = [
      { Destination: "Angola" },
      { Destination: "Rome" },
      { Destination: "Torino" }
    ]
    return listDestination[Math.floor(Math.random() * listDestination.length)].Destination.toString();
  }

  generateTime() {
    let hour: number;
    let minute: number;
    let timeCompose: string = "";
    hour = Number(this.generateNumber(2));
    while (hour > 24) {
      hour = Number(this.generateNumber(2));
      if (hour == 0) {
        hour = 24;
      }
    }
    minute = Number(this.generateNumber(2));
    while (minute > 60) {
      minute = Number(this.generateNumber(2));
    }
    if (String(hour).length == 1) {
      timeCompose = "0" + hour;
    } else {
      timeCompose = String(hour);
    }

    if (String(minute).length == 1) {
      timeCompose = timeCompose + ":0" + minute;
    } else {
      timeCompose = timeCompose + ":" + minute
    }
    return timeCompose
  }
}
