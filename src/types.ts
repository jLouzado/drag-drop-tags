export type State = {
  tags: Record<string, { groupId: string | null }>;
};

export type Reducer<T> = (action: Event, state: T) => State;

export type Dispatcher<S> = (r: Reducer<S>) => (e: Event) => void;
