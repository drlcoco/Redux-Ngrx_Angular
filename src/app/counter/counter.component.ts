import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../store/items.actions';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  title: string = "Counter usando redux";
  counter: number;

  constructor(private store: Store<{counter: number}>) {
    this.counter = 0;
    this.store.select('counter').subscribe(
      counter => {
        this.counter = counter;
      }
    )
  }

  increment() {
    this.store.dispatch(increment());
    console.log("Incrementando....");
  }

  decrement() {
    this.store.dispatch(decrement())
    console.log("Decrementando....");
  }

  reset() {
    this.store.dispatch(reset())
    console.log("Reseteando....");
    
  }

}
