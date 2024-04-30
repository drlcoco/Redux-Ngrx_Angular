import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  title: string = "Counter usando redux";
  counter: number = 0;

  increment() {
    this.counter++;
    console.log("Incrementando....");
  }

  decrement() {
    this.counter--;
    console.log("Decrementando....");
  }

  reset() {
    this.counter = 0;
    console.log("Reseteando....");
    
  }

}
