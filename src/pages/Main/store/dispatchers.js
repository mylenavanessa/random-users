import { Creators } from './users';
import api from '../../../services/api'

export function dispatchFetchUsers(page){
  return async dispatch => {
    dispatch(Creators.fetchUsers())
    try{
      const { data: { results } } = await api.get(`/api/?page=${page}&results=21`)
      dispatch(Creators.fetchUsersSuccess(results))
    }catch(err){
      dispatch(Creators.fetchUsersError(err))
    }
  }
}

