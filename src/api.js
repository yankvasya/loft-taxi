export const serverLogin = async (email, password) =>
  fetch(
    'https://loft-taxi.glitch.me/auth',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    }
  )
    .then(res => res.json()).then(({ success }) => success)
