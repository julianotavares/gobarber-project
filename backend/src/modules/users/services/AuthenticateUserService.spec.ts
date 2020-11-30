import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fake/FakeUserRepository';
import AuthenticateUserService from './AuthenticateUserService';
import CreateUserService from './CreateUserService';

describe('AuthenticateUser', () => {
  it('should be able to authenticate', async () => {
    const fakeUsersRepository = new FakeUsersRepository()

    const createUser = new CreateUserService(fakeUsersRepository,)
    const authenticateUser = new AuthenticateUserService(fakeUsersRepository,)

    await createUser.execute({
      name: 'John Doe',
      email: 'john@doe.com',
      password: '123456',
    })

  const response = await authenticateUser.execute({
    email: 'john@doe.com',
    password: '123456'
  })

  expect(response).toHaveProperty('token')
  })

})
