import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { CounterState } from 'src/store/reducers/counter.state';
import { IncrementCounter,DecrementCounter } from 'src/store/actions/counter-action';
@Component({
  selector: 'app-counter',
  template: `
  <div class="counter">
  <button (click)="increment()" class="btn-counter"><i class="fa fa-plus"></i></button>
  <p>{{ count$ | async }}mins</p>
  <button (click)="decrement()" class="btn-counter" [disabled]="isDecrementDisabled"><i class="fa fa-minus"></i></button>
  </div>
`,
})
export class CounterComponent {
  count$ = this.store.select(CounterState.getCount);

  constructor(private store: Store) {}

  increment() {
    this.store.dispatch(new IncrementCounter());
  }

  decrement() {
    this.store.dispatch(new DecrementCounter());
  }
  get isDecrementDisabled(): boolean {
    return this.store.selectSnapshot(CounterState.getCount) === 0;
  }
}
