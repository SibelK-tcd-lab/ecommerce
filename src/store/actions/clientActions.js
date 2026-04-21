import { API } from '../../api/axiosInstance';

export const setRoles = (roles) => ({ type: 'SET_ROLES', payload: roles });

export const fetchRoles = () => (dispatch, getState) => {
  const { roles } = getState().client;
  
  // Sadece roller boşsa tetiklenir (In case of need)
  if (roles.length > 0) return;

  API.get('/roles')
    .then(res => {
      dispatch(setRoles(res.data));
    })
    .catch(err => console.error("Error fetching roles:", err));
};