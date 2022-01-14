export const serverLogin = async (email, password) =>
  fetch(`https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`)
    .then(res => res.json()).then(({ success }) => success)
