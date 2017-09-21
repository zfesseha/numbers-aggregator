import { Injectable } from '@angular/core';
import { Http} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class NumbersService {

  constructor(private http:Http) {
      console.log("service got called fam.");
  }
    getNumbers() {
        return this.http.get('api/v1/numbers').map(response => {
            return response.json();
        })
    }

    getFibonacciNumbers() {
        return this.http.get('api/v1/numbers/fibonacci').map(response => {
            return response.json();
        })
    }

    getSumOfNumbers() {
        return this.http.get('api/v1/numbers/sum').map(response => {
            return response.json();
        })
    }

    clearNumbers() {
        return this.http.get('api/v1/numbers/clear').map(response => {
            return response.json();
        })
    }

    addNumber(number:string) {
        return this.http.post('api/v1/numbers', {number : number}).map(response => {
            return response.json();
        })
    }

}
