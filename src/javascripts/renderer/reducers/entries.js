export default (state = initialState(), action) => {
  switch (action.type) {
    case 'NEW_ENTRY':
      return { ...state, new: true, edit: false }
      break
    case 'EDIT_ENTRY':
      return { ...state, edit: true, new: false }
    case 'SET_ENTRIES':
      return { ...state, items: action.entries }
      break
    case 'SET_CURRENT_ENTRY':
      return { ...state, current: findEntry(state, action.id), new: false, edit: false }
      break
    case 'ENTRY_REMOVED':
      return { new: false, edit: false, current: null, items: action.entries }
      break
    default:
      return state
  }
}

const findEntry = (state, id) => {
  return state.items.find(item => {
    if (item.id === id) return item
  })
}

const initialState = () => {
  return {
    new: false,
    edit: false,
    current: null,
    items: []
  }
}
