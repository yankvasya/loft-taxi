import axios from 'axios'
//
// export const serverLogin = async (email, password) =>
//   fetch(
//     'https://loft-taxi.glitch.me/auth',
//     {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ email, password })
//     }
//   )
//     .then(res => res.json()).then(({ success }) => success)

const instance = axios.create({
  baseURL: 'https://loft-taxi.glitch.me',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export const serverLogin = async (email, password) =>
  instance.post('/auth', { email, password })

export const serverRegister = async (email, password, name, surname) =>
  instance.post('/register', { email, password, name, surname })

export const serverPutCard = async (cardNumber, expiryDate, cardName, cvc, token) =>
  instance.post('/card', { cardNumber, expiryDate, cardName, cvc, token })

// cardNumber: "0000 0000 0000 0000", expiryDate: "", cardName: "", cvc: "", token: AUTH_TOKEN

export const serverGetCard = async (AUTH_TOKEN) =>
  instance.get(`/card?token=${AUTH_TOKEN}`)

export const serverAddressList = async () =>
  instance.get('/addressList')

export const serverRoute = async (address1, address2) =>
  instance.get(`/route?address1=${address1}&address2=${address2} (LED)`)
