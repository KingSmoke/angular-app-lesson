import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <h1 [style.color]="titleStyle ? 'green' : 'pink'">My code combining Event binding and CSS Style binding</h1>
  <p>This is a little test that I thought up.</p>
  <button (click)="goPink()">Pink</button>
  <button (click)="goGreen()">Green</button>
    
    `,

  styles: [`
    .red-title {
      color: red;
    }
  `]
})
export class AppComponent {

  titleStyle = true;

  goPink() {
    this.titleStyle = false;
  }
  goGreen() {
    this.titleStyle = true;
  }

}
