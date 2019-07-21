import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  fetchUsers: [],
  fetchUsersSuccess: ['data'],
  fetchUsersError: [],
},{ prefix: 'users/'});

const INITIAL_STATE = {
  data: [],
  isLoading: false
};

const fetchUsers = (state = INITIAL_STATE, action) => ({...state, isLoading: true})

const fetchUsersSuccess = (state = INITIAL_STATE, action) => {
  return {
    data: [...state.data, ...action.data],
    isLoading: false
  }
}

const fetchUsersError = (state = INITIAL_STATE, action) => ({...state, isLoading: false})

export default createReducer(INITIAL_STATE,{
  [Types.FETCH_USERS]: fetchUsers,
  [Types.FETCH_USERS_SUCCESS]: fetchUsersSuccess,
  [Types.FETCH_USERS_ERROR]: fetchUsersError,
});
