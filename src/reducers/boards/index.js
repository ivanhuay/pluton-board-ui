
const defaultLists = [
  {title: 'todo', list:[]},
  {title: 'in progress', list:['use new hooks']},
  {title: 'random', list:[]},
  {title: 'done', list:['drag & drop items','grid-colomns', 'flex-columns', 'add some css']},
];
const initialState = {
  title: '',
  lists: defaultLists,
  data:{},
  loadingBoard: true,
  loadingList: false,
  movingItem: null,
  fromIndex: null,
  boardList: [],
  loadingBoardList: true
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
      return {
        ...state,
        loadingBoard: true
      };
    case 'SUCCESS_BOARD':
      return {
        ...state,
        loadingBoard: false,
        title: action.data.title,
        lists: action.data.lists,
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
    default:
      return state;
  }
}
