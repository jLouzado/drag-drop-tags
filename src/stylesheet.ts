import {stylesheet} from 'typestyle'

export const styles = stylesheet({
  unselectedTags: {
    display: 'flex'
  },

  tag: {
    borderRadius: '4px',
    backgroundColor: 'lightGray',
    height: '20px',
    width: '20px',
    margin: '4px'
  },
  groupsContainer: {
    display: 'flex'
  },
  group: {
    border: '1px solid black',
    height: '200px',
    width: '200px',
    margin: '4px'
  }
})
