import axios from 'axios';

const authStart = () => ({ type: 'AUTH_START' });

const authSuccess = (user, token) => ({
  type: 'AUTH_SUCCESS',
  payload: { user, token }
});

const authFail = (error) => ({
  type: 'AUTH_FAIL',
  payload: error
});

export const login = (username, password) => async (dispatch) => {
  dispatch(authStart());
  try {
    const response = await axios.post('/api/auth/login', { username, password });
    dispatch(authSuccess(response.data.user, response.data.token));
  } catch (error) {
    dispatch(authFail(error.response.data.message));
  }
};

export const logout = () => ({ type: 'LOGOUT' });
