// import { Component } from '@angular/core';
// import { ROUTER_DIRECTIVES } from '@angular/router';
// import { HeroService } from './hero.service'
//
// @Component({
//   selector: 'my-app',
//   template: `
//     <h1>{{title}}</h1>
//     <nav>
//       <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
//       <a [routerLink]="['/heroes']" routerLinkActive="active">Heroes</a>
//     </nav>
//     <router-outlet></router-outlet>
//   `,
//   styleUrls: ['app/app.component.css'],
//   directives: [ROUTER_DIRECTIVES],
//   providers: [
//     HeroService
//   ]
// })
// export class AppComponent {
//   title = 'Tour of Heroes';
// }
import { Component } from '@angular/core';
import { MyService } from './my.service';

@Component({
  selector: 'my-app',
  template: `
    <ul>
      <li *ngFor="let item of data">{{item}}</li>
    </ul>
  `,
  providers: [MyService]
})
export class AppComponent {
  private data: string[];

  constructor(private myService: MyService) {
    this.data = myService.loadData();
  }
}
