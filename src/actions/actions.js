/**
 * 页面中的所有actions仓库
 */
export const TYPE = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
}

export const login = (data) => {
  return {
    type: TYPE.LOGIN,
    data
  }
}

export const logout = () => {
  return {
    type: TYPE.LOGOUT,
  }
}