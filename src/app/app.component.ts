import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>Hello, {{app_dev}}.</p> 
    <p>The dog-gone girl is {{myArr[0]}}.</p>
    <p>You live in {{myObject.location}}.</p>
    <ul>
      <li *ngIf="myArr; else otherTmpl">Yes, myArr exists.</li>
      <li *ngIf="!myArr">No, myArr does not exist.</li>
      <li *ngIf="!myArr">I need teepee for my {{myAss[2]}}!</li>
      <li *ngIf="score>100">Good score, {{app_dev}}!</li>
      <li *ngFor="let arr of myArr">{{ arr }}</li>
      <li *ngIf="myAss">I'm scratching my {{myAss[1]}}.</li>
    </ul>

    <div *ngIf="myArr; then tmpl1 else tmpl2"></div>

    <ng-template #tmpl1><h1>tmpl1</h1></ng-template>
    <ng-template #tmpl2><h1>tmpl2</h1></ng-template>
    
    <ng-template #otherTmpl><h2>This is the other template demonstrating a conditional If Else statement.</h2></ng-template>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Playground';
  app_dev = 'King Smoke';
  score = 101;
  myObject = {
    age: '46',
    location: 'Whitby, ON'
  }

  myArr1 = ['mine','hers','yours'];
  myAss = ['left cheek','right cheek','bung hole'];
}
