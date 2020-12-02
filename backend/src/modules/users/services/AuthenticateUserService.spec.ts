import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fake/FakeUserRepository';
import FakeHahsProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import AuthenticateUserService from './AuthenticateUserService';
import CreateUserService from './CreateUserService';

describe('AuthenticateUser', () => {
  it('should be able to authenticate', async () => {
    const fakeUsersRepository = new FakeUsersRepository()
    const fakeHahsProvider = new FakeHahsProvider()

    const createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHahsProvider,

      )
    const authenticateUser = new AuthenticateUserService(fakeUsersRepository, fakeHahsProvider)

    const user = await createUser.execute({
      name: 'John Doe',
      email: 'john@doe.com',
      password: '123456',
    })

  const response = await authenticateUser.execute({
    email: 'john@doe.com',
    password: '123456'
  })

  expect(response).toHaveProperty('token')
  expect(response.user).toBe(user)
  })


  it('should not be able to authenticate with non existing user', async () => {
    const fakeUsersRepository = new FakeUsersRepository()
    const fakeHahsProvider = new FakeHahsProvider()

    const authenticateUser = new AuthenticateUserService(fakeUsersRepository, fakeHahsProvider)


  await expect(authenticateUser.execute({
    email: 'john@doe.com',
    password: '123456'
  })).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to authenticate with wrong password', async () => {
    const fakeUsersRepository = new FakeUsersRepository()
    const fakeHahsProvider = new FakeHahsProvider()

    const createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHahsProvider,

      )
    const authenticateUser = new AuthenticateUserService(
      fakeUsersRepository,
      fakeHahsProvider,
      )

    await createUser.execute({
      name: 'John Doe',
      email: 'john@doe.com',
      password: '123456',
    })

    await expect(authenticateUser.execute({
      email: 'john@doe.com',
      password: 'wrong-password'
    })).rejects.toBeInstanceOf(AppError)

  })

})
