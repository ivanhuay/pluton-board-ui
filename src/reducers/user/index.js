
const initialState = {
  loading: false,
  loadingRepositories: false,
  token: localStorage.getItem('token'),
  errorRepositories: '',
  profile: JSON.parse(localStorage.getItem('profile'))
}
export default function ModalReducer(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_AUTH':
      return {
        ...state,
        loading: true,
      };
    case 'SUCCESS_AUTH':
      return {
        ...state,
        loading: false,
        token: action.data.token,
        profile: action.data.profile,
      };
    case 'LOGOUT_AUTH':
      return {
        ...state,
        loading: false,
        token: null,
        profile: null,
      };
    case 'REQUEST_REPOSITORIES':
      return {
        ...state,
        errorRepositories: '',
        loadingRepositories: true
      }
    case 'SUCCESS_REPOSITORIES':
      return {
        ...state,
        loadingRepositories: false,
        repositories: action.data
      }
    case 'ERROR_REPOSITORIES':
      return {
        ...state,
        loadingRepositories: false,
        error: action.data.message
      }
    default:
      return state;
  }
}
