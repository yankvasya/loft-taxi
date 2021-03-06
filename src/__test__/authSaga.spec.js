import { recordSaga } from '../modules/sagas/recordSaga'
import { authenticateSaga } from '../modules/sagas/authSaga'
import { authenticate } from '../modules/actions'
import { serverLogin } from '../modules/api'

jest.mock('../api')

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
