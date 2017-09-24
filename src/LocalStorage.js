const LOGIN_EMAIL = 'login_email';

export const AuthStore = {
  setData(email) {
    localStorage.setItem(LOGIN_EMAIL, email);
  },
  getLoginEmail() {
    return localStorage.getItem(LOGIN_EMAIL);
  },
  isAuthenticated() {
    return localStorage.getItem(LOGIN_EMAIL) !== null;
  },
  clearData() {
    localStorage.clear();
  },
};
