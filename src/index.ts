import {VNode} from 'snabbdom/build/package/vnode'
import {Reducer, State} from './types'
import * as faker from 'faker'

/**###Types  */
import {patch} from './utilities/patch'
import {view} from './view'

/// App

export const getWords = (options: Partial<{limit: number; seed: number}>) => {
  if (options.seed) faker.seed(options.seed)
  return faker.random
    .words(faker.random.number(options.limit ? options.limit : 30))
    .split(' ')
}

// const getTags = () => getWords({limit: 20})
// const getGroups = () => getWords({limit: 5})

// const groups = getGroups()

const init = (): State => ({
  tags: {
    a: {
      groupId: '1'
    },
    b: {
      groupId: '2'
    },
    c: {
      groupId: '3'
    },
    d: {
      groupId: null
    },
    e: {
      groupId: '1'
    },
    f: {
      groupId: '2'
    },
    g: {
      groupId: '3'
    },
    h: {
      groupId: null
    }
  }
})

window.onload = () => {
  let app: HTMLElement | VNode = document.getElementById('app') as HTMLElement

  if (app) {
    let state: State = init()
    console.log('init', state)

    /** Receives actions from DOM and updates state */
    const dispatch = (reducer: Reducer<State>) => (e: Event) => {
      console.log('before', state)
      state = reducer(e, state)
      console.log('after', state)
      app = patch(app, view(dispatch, state))
    }

    // First patch, to kick things off
    app = patch(app, view(dispatch, state))
  } else {
    throw new Error('Failed to find Context')
  }
}
