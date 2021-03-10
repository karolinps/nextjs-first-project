import decode from "jwt-decode";
import Cookies from "js-cookie";

// return the user data from the session storage
export const getUser = () => {
  const userStr = Cookies.get("user");
  if (userStr) return JSON.parse(userStr);
  else return null;
};

// return the token from the session storage
export const getToken = () => {
  return Cookies.get("token") || null;
};

// remove the token and user from the session storage
export const removeUserSession = () => {
  Cookies.remove("token");
  Cookies.remove("user");
};

// set the token and user from the session storage
export const setUserSession = (token, user) => {
  Cookies.set("token", token);
  Cookies.set("user", JSON.stringify(user));
};

//Token expired
export const isTokenExpired = (token) => {
  try {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      // Checking if token is expired. N
      return true;
    } else return false;
  } catch (err) {
    return false;
  }
};
