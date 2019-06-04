export const requestBoard = () => ({
  type: 'REQUEST_BOARD'
});
export const successBoard = data => ({
  type: 'SUCCESS_BOARD',
  data
});

export const getBoard = (id) => {
  return (dispatch) => {
    dispatch(requestBoard());
    return fetch(`http://localhost:3000/api/boards/${id}/`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(successBoard(data));
      });
  }
}

export const setList = (lists) => ({
  type: 'SET_LIST',
  lists
});
export const setMovingItem = (movingItem, fromIndex) => ({
  type: 'SET_MOVING_ITEM',
  movingItem,
  fromIndex
});

export const requestAddList = () => ({
  type: 'REQUEST_ADD_LIST'
});
export const successAddList = () => ({
  type: 'SUCCESS_ADD_LIST'
});
export const addList = (boardId, listName) => {
  return (dispatch) => {
    dispatch(requestBoard());
    return fetch(`http://localhost:3000/api/boards/${boardId}/lists`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          list: listName
        })
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(successAddList());
        dispatch(getBoard(boardId));
      });
  }
}
