export function authStatusController({ getState }) {
  return next => action => {

    if(action.type === "auth/login") {
      localStorage.setItem("auth-status", JSON.stringify({isLogin: true}))
    }

    if(action.type === "auth/logout") {
      localStorage.removeItem("auth-status");
    }

    return next(action)
  }
}