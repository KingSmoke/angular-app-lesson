import { Injectable } from '@angular/core';

@Injectable()
export class MyDataService {

  constructor() { }

    cars = [
      'Ford', 'Chevrolet', 'Buick'
    ];

    myDataMethod() {
      return 'This is my data, man!';
    }

}
