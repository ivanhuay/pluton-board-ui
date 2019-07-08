const defaultLists = {
    'Todo': [],
    'In Progress': [],
    'Done': []
};
const initialState = {
  title: '',
  lists: defaultLists,
  data:{},
  loadingBoard: true,
  loadingList: false,
  loadingCreateBoard: false,
  movingItem: null,
  fromIndex: null,
  boardList: [],
  loadingBoardList: true,
  loadingIntegration: true,
  errorIntegration: ''
}
export default function BoardsReducer(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_BOARDS_LIST':
      return {
        ...state,
        loadingBoardList: true
      };
    case 'SUCCESS_BOARDS_LIST':
      return {
        ...state,
        loadingBoardList: false,
        boardList: action.data
      }
    case 'REQUEST_BOARD':
    case 'REQUEST_MOVE_TICKET':
      return {
        ...state,
        loadingBoard: true
      };
    case 'SUCCESS_BOARD':
      const lists = {};
      action.data.lists.forEach((key)=> lists[key] = []);
      action.data.tickets.forEach((data)=> lists[data.list].push(data.ticket));
      return {
        ...state,
        loadingBoard: false,
        title: action.data.title,
        lists: lists,
        data: action.data
      }
    case 'SET_LIST':
      return {
        ...state,
        lists: action.lists,
        details: action.details
      }
    case 'SET_MOVING_ITEM':
      return {
        ...state,
        movingItem: action.movingItem,
        fromIndex: action.fromIndex
      }
    case 'REQUEST_ADD_LIST':
      return {
        ...state,
        loadingList: true
      }
    case 'SUCCESS_ADD_LIST':
      return {
        ...state,
        loadingList: false
      }
    case 'REQUEST_CREATE':
      return {
        ...state,
        loadingCreateBoard: true
      }
    case 'SUCCESS_CREATE_BOARD':
      return {
        ...state,
        loadingCreateBoard: false
      }
    case 'REQUEST_INTEGRATE_REPO':
      return {
        ...state,
        loadingIntegration: true,
        errorIntegration: ''
      }
    case 'SUCCESS_INTEGRATE_REPO':
      return {
        ...state,
        loadingIntegration: false
      }
    case 'ERROR_INTEGRATE_REPO':
      return {
        ...state,
        loadingIntegration: false,
        errorIntegration: action.data
      }
    default:
      return state;
  }
}
