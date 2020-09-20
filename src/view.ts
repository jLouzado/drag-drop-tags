import {VNode} from 'snabbdom/build/package/vnode'
import {h} from 'snabbdom/build/package/h'
import {Dispatcher, State} from './types'
import {styles} from './stylesheet'

const getUnassigned = (state: State): Array<string> =>
  Object.keys(state.tags).filter((tag) => state.tags[tag].groupId === null)

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

const hTag = (tag: string) =>
  h(
    'div',
    {
      class: {
        [styles.tag]: true
      }
    },
    [tag]
  )

export const view = (d: Dispatcher<State>, state: State): VNode => {
  const groups = getGroups(state)

  return h('div', [
    h('h1', ['Unselected']),
    h(
      'div',
      {class: {[styles.unselectedTags]: true}},
      getUnassigned(state).map(hTag)
    ),
    h(
      'div',
      {
        [styles.groupsContainer]: true
      },
      Object.keys(groups).map((groupId) =>
        h(
          'div',
          {
            class: {[styles.group]: true}
          },
          [h('h2', [groupId]), h('div', groups[groupId].map(hTag))]
        )
      )
    )
  ])
}
