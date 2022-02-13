export const checkData = (payload) => payload.email && payload.password ? payload : getLocalStorage()

export const getLocalStorage = () => {
  const email = localStorage.getItem('email')
  const password = localStorage.getItem('password')

  if (email && password) {
    return { email, password }
  } else return false
}

export const setLocalStorage = (email, password) => {
  localStorage.setItem('email', email)
  localStorage.setItem('password', password)
}

export const removeLocalStorage = () => {
  localStorage.removeItem('email')
  localStorage.removeItem('password')
}
