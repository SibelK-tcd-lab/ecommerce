import { API } from '../../api/axiosInstance';

// Action Types
export const SET_ROLES = 'SET_ROLES';

// Action Creators
export const setRoles = (roles) => ({ type: SET_ROLES, payload: roles });

// Thunk Action Creator
export const fetchRoles = () => (dispatch, getState) => {
  // GÜVENLİ ERİŞİM: getState().client undefined olsa bile uygulama artık çökmez.
  const state = getState();
  const client = state.client || {}; 
  const roles = client.roles || [];
  
  // Eğer roller zaten yüklüyse gereksiz API isteği atma
  if (roles && roles.length > 0) {
    return;
  }

  // API isteği
  API.get('/roles')
    .then(res => {
      dispatch(setRoles(res.data));
    })
    .catch(err => {
      console.error("Roller çekilirken hata oluştu (Timeout veya Network):", err);
      // Hata olsa bile uygulamayı kilitlememek için boş dizi gönderiyoruz
      dispatch(setRoles([]));
    });
};