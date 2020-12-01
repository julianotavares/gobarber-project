import AppError from '@shared/errors/AppError';
import FakeHahsProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fake/FakeUserRepository';
import CreateUserService from './CreateUserService';

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository()
    const fakeHashProvider = new FakeHahsProvider()
    const createUser = new CreateUserService(fakeUsersRepository,fakeHashProvider)

  const user = await createUser.execute({
    name: 'John Doe',
    email: 'john@doe.com',
    password: '123456'
  })

  expect(user).toHaveProperty('id')
  })

  it('should not be able to create a new user with same email from another', async () => {
    const fakeUsersRepository = new FakeUsersRepository()
    const fakeHashProvider = new FakeHahsProvider()
    const createUser = new CreateUserService(fakeUsersRepository,fakeHashProvider)

  await createUser.execute({
    name: 'John Doe',
    email: 'john@doe.com',
    password: '123456'
  })

  expect(createUser.execute({
    name: 'John Doe',
    email: 'john@doe.com',
    password: '123456'
  })).rejects.toBeInstanceOf(AppError)
  })
})
