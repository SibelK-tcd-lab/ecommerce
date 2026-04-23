import { API } from '../../api/axiosInstance';

// Action Types - Sabit olarak tanımlamak profesyonel yaklaşımdır
export const SET_ROLES = 'SET_ROLES';

// Action Creators
export const setRoles = (roles) => ({ type: SET_ROLES, payload: roles });

// Thunk Action Creator
export const fetchRoles = () => (dispatch, getState) => {
  const { roles } = getState().client;
  
  // "In case of need" kuralı: Eğer roller zaten varsa dur.
  if (roles && roles.length > 0) {
    return;
  }

  // API isteği atılmadan önce fetchState'i "FETCHING" yapabilirsin (opsiyonel)
  API.get('/roles')
    .then(res => {
      dispatch(setRoles(res.data));
    })
    .catch(err => {
      console.error("Error fetching roles:", err);
      // Hata durumunda fail state'i güncellenebilir
    });
};