// counter.state.ts
import { State, Action, StateContext, Selector } from '@ngxs/store';
import counter from '../interfaces';
import { DecrementCounter, IncrementCounter } from '../actions/counter-action';

@State<counter>({
  name: 'counter',
  defaults: {
    count: 0,
  },
})
export class CounterState {
  @Selector()
  static getCount(state: counter): number {
    return state.count;
  }

  @Action(IncrementCounter)
  incrementCounter(ctx: StateContext<counter>) {
    const state = ctx.getState();
    ctx.patchState({
      count: state.count + 1,
    });
  }

  @Action(DecrementCounter)
  decrementCounter(ctx: StateContext<counter>) {
    const state = ctx.getState();
    ctx.patchState({
      count: state.count - 1,
    });
  }
}
