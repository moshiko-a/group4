import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Answer 3';
  foods: string[] = ['hamburger', 'BBQ', 'salad'];
  beverages: string[] = ['beer', 'vodka', 'coke'];
  colors: string[] = ['blue', 'green', 'black'];


  switchSuffix(num: number) {
    switch (num) {
      case 1:
        return 'st'
      case 2:
        return 'nd'
      case 3:
        return 'rd';
      case 4:
        return 'th';
    }
  }
}
