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
    return fetch(`http://localhost:3000/api/boards/${id}?populate=lists.list`)
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

export const requestAddTicket = () => ({
  type: 'REQUEST_ADD_TICKET'
});
export const successAddTicket = () => ({
  type: 'SUCCESS_ADD_TICKET'
});
export const addTicket = (boardId, ticketTitle) => {
  return (dispatch) => {
    dispatch(requestAddTicket());
    return fetch(`http://localhost:3000/api/tickets/board/${boardId}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: ticketTitle
        })
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(successAddTicket());
        dispatch(getBoard(boardId));
      });
  }
}

export const requestBoardsList = () => ({
  type: 'REQUEST_BOARDS_LIST'
});
export const successBoardsList = (data) => ({
  type: 'SUCCESS_BOARDS_LIST',
  data
});
export const getBoardLists = (boardId, ticketTitle) => {
  return (dispatch) => {
    dispatch(requestAddTicket());
    return fetch(`http://localhost:3000/api/boards`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(successBoardsList(data));
      });
  }
}
