
type State = {
  tags: Record<string, {groupId: string}>
}

const state = {
  tag1: {
    groupId: 'first'
  },
  tag2: {
    groupId: 'second'
  }
}

declare const addToGroup: (tag: string, groupId: string) => State
declare const removeFromGroup: (tag: string, groupId: string) => State



document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;
