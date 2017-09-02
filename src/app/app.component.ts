import { Component } from '@angular/core';
import { MyDataService } from './my-data.service';

@Component({
  selector: 'app-root',
  template: `

  <p>{{ someProperty }}</p>
    
    `,

  styles: [`
    .red-title {
      color: red;
    }
  `]
})
export class AppComponent {

  constructor(private dataService:MyDataService) {

  }

  someProperty:string = '';

  ngOnInit() {
    console.log(this.dataService.cars);

    this.someProperty = this.dataService.myDataMethod();
  }

}
