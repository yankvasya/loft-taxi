import { recordSaga } from './recordSaga'
import { authenticateSaga } from './authSaga'
import { authenticate } from './actions'
import { serverLogin } from './api'

jest.mock('./api')

describe('authSaga test', () => {
  it('auth via api', async () => {
    serverLogin.mockImplementation(() => ({ data: { success: true, token: 'testToken' } }))
    const dispatched = await recordSaga(
      authenticateSaga,
      authenticate({ login: 'testLogin', password: 'testPassword' })
    )
    expect(dispatched).toEqual([
      {
        type: 'LOG_IN'
      }
    ])
  })
})
