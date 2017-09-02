import { Component } from '@angular/core';
import { MyDataService } from './my-data.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations'

@Component({
  selector: 'app-root',//end selector
  template: `
    <p [@myAwesomeAnimation]='state' (click)="animateMe()">I will animate</p>
    `,//end template
  styles: [`
    p {
      width:200px;
      background:lightgray;
      margin:100px auto;
      text-align:center;
      padding:20px;
      font-size:1.5em;
    }
  `],//end styles
// trigger accepts state args about direction of change, ie. small to large
// state accepts style args about CSS
  animations: [
    trigger('myAwesomeAnimation', [
      state('small', style({
        transform: 'scale(1)',
      })),//end state
      state('large', style({
        transform: 'scale(1.2)',
      })),// end state
      transition('small <=> large', animate('300ms ease-in', style({
        transform: 'translateY(40px)'
      }))),//end transition
    ]),// end trigger
  ]//end animations
})//end @component

export class AppComponent {

  state: string = 'small'

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

  //constructor from a lesson on services
  constructor(private dataService:MyDataService) {

  }
 

}
