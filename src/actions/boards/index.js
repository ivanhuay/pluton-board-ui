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
    return fetch(`http://localhost:3000/api/boards/${id}?populate=tickets.ticket`)
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
    return fetch(`http://localhost:3000/api/boards/${boardId}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          lists: {$push: listName}
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

export const requestCreateBoard = () => ({
  type: 'REQUEST_CREATE_BOARD'
});
export const successCreateBoard = (data) => ({
  type: 'SUCCESS_CREATE_BOARD',
  data
});
export const createBoard = (boardData) => {
  return (dispatch) => {
    dispatch(requestCreateBoard());
    return fetch(`http://localhost:3000/api/boards`,{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(boardData)
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(successCreateBoard(data));
      });
  }
}


export const requestMoveTicket = () => ({
  type: 'REQUEST_MOVE_TICKET'
});
export const successMoveTicket = (data) => ({
  type: 'SUCCESS_MOVE_TICKET',
  data
});
export const moveTicket = (boardId, ticketId, list) => {
  return (dispatch) => {
    dispatch(requestMoveTicket());
    return fetch(`http://localhost:3000/api/boards/${boardId}/ticket/${ticketId}/${list}`,{
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(getBoard(data._id));
      });
  }
}
