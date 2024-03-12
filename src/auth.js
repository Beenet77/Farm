import storage from "./storage";

export function getAuthToken() {
  let mytoken = storage.getToken();
  if (mytoken) return mytoken;
}

export function logout() {
  storage.clearToken();
}
