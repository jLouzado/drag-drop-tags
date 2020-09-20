import {VNode} from 'snabbdom/build/package/vnode'
import {h} from 'snabbdom/build/package/h'
import {Dispatcher, State} from './types'

const getUnassigned = (state: State): Array<string> =>
  Object.keys(state.tags).filter((tag) => state.tags[tag].groupId === null)

// const hasGroupId = (tag:string):  => state.tags[tag].groupId !== null

const getGroups = (state: State): Record<string, Array<string>> =>
  Object.keys(state.tags)
    .filter((tag) => state.tags[tag].groupId !== null)
    .reduce<Record<string, Array<string>>>((acc, tag) => {
      // TODO(tsc): add typeguard
      const groupId = state.tags[tag].groupId as string

      return {
        ...acc,
        [groupId]: Array.of(tag)
      }
    }, {})

const hTag = (tag: string) => h('div', [tag])

export const view = (d: Dispatcher<State>, state: State): VNode => {
  const groups = getGroups(state)

  return h('div.layout', [
    h('div.tags', getUnassigned(state).map(hTag)),
    h(
      'div.groups',
      Object.keys(groups).map((groupId) =>
        h('div', [h('div', [groupId]), h('div', groups[groupId].map(hTag))])
      )
    )
  ])
}
