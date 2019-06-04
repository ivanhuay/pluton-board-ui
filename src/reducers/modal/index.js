
const initialState = {
  isOpen: false,
  value:''
}
export default function ModalReducer(state = initialState, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        isOpen: true
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        isOpen: false
      }
    case 'UPDATE_VALUE':
      return {
        ...state,
        value: action.value
      }
    case 'CLEAR_VALUE':
      return {
        ...state,
        value: ''
      }
    default:
      return state;
  }
}
