const USER_ID = 'user_id';

export const LoginStore = {
  setData(data) {
    return localStorage.setItem(USER_ID, data);
  },
  clearData() {
    localStorage.removeItem(USER_ID);
  },
  authenticated() {
    return localStorage.getItem(USER_ID);
  }
}
