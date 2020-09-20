import { State } from "./types";

export const addToGroup = (
  state: State,
  tag: string,
  groupId: string
): State => ({
  ...state,
  [tag]: {
    groupId,
  },
});

export const clearGroup = (state: State, tag: string): State => ({
  ...state,
  [tag]: {
    groupId: null,
  },
});
