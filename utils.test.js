import { formatUserName } from './utils'

describe('formatUserName', () => {
  it('should return a \'title + firstname + lastname\' string with space in between', () => {
    const user = {
      title: 'Mr',
      firstname: 'George',
      lastname: 'Abitbol',
    }
    expect(formatUserName(user)).toBe('Mr George Abitbol')
  })
})