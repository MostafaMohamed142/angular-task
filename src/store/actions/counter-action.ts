import { Action } from '@ngxs/store';

export class IncrementCounter {
  static readonly type = '[Counter] Increment';
}

export class DecrementCounter {
  static readonly type = '[Counter] Decrement';
}

