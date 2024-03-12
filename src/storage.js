const storagePrefix = "farm_token";

const storage = {
  getToken: () => {
    return JSON.parse(window.localStorage.getItem(storagePrefix));
  },
  setToken: (token) => {
    window.localStorage.setItem(storagePrefix, JSON.stringify(token));
  },
  clearToken: () => {
    window.localStorage.removeItem(storagePrefix);
  },
};

export default storage;
