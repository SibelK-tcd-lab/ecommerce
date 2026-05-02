import { API } from '../../api/axiosInstance';

// Action Types
export const SET_USER = 'SET_USER';
export const LOGOUT = 'LOGOUT';
export const SET_ROLES = 'SET_ROLES';

// Action Creators
export const setUser = (user) => ({ type: SET_USER, payload: user });
export const logoutUser = () => ({ type: LOGOUT });
export const setRoles = (roles) => ({ type: SET_ROLES, payload: roles });

// Thunk Actions

// Otomatik Giriş (Auto Login) İşlemi
export const checkAutoLogin = () => async (dispatch) => {
  const token = localStorage.getItem('token');

  if (token) {
    // Token'ı Bearer eklemeden header'a ekliyoruz
    API.defaults.headers.common['Authorization'] = token;

    try {
      // Doğrulama isteği
      const response = await API.get('/verify');
      const user = response.data;

      // Kullanıcı nesnesini reducer'a aktarma
      dispatch(setUser(user));

      // Token'ı yenileme / güncelleme
      const newToken = response.data.token || token;
      localStorage.setItem('token', newToken);
      API.defaults.headers.common['Authorization'] = newToken;

    } catch (error) {
      // Token geçersizse localStorage ve axios header'dan temizle
      localStorage.removeItem('token');
      delete API.defaults.headers.common['Authorization'];
      console.error('Token doğrulanamadı:', error.response?.data || error.message);
    }
  }
};

// Rolleri Çekme İşlemi
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