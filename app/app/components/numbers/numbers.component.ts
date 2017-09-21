import { Component, OnInit } from '@angular/core';

import { NumbersService } from "../../services/numbers.service";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    selector: 'app-numbers',
    templateUrl: './numbers.component.html',
    styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {
    numbers:number[]
    fibonacciNumbers:number[]
    sum:number
    newNumber:string

    constructor(private numbersService:NumbersService) {
        this.search = this.search.bind(this);
    }

    ngOnInit() {
        this.loadData();
    }

    loadData() {
        this.numbersService.getNumbers().subscribe(numbers => {
            this.numbers = numbers;
        })

        this.numbersService.getFibonacciNumbers().subscribe(numbers => {
            this.fibonacciNumbers = numbers;
        })

        this.numbersService.getSumOfNumbers().subscribe(result => {
            this.sum = result.sum;
        })
    }


    addNumber(number:string) {
        this.numbersService.addNumber(number).subscribe(numbers => {
            this.loadData();
        })
    }

    clearNumbers() {
        this.numbersService.clearNumbers().subscribe(numbers => {
            this.loadData();
        })
    }

    isNumbersEmpty() {
        return this.numbers.length === 0;
    }

    formatter(result: string) {
        return result.toUpperCase();
    }

    search(text$: Observable<string>) {
        return text$
            .debounceTime(200)
            .distinctUntilChanged()
            .map(term => term.length < 1 ? []
                : this.fibonacciNumbers.filter(v => (v + "").toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));
    }

}
