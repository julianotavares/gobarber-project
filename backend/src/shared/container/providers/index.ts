import { container } from 'tsyringe'

import IStorageProvider from './StorageProvider/models/IStorageProvider'
import DiskStorageProvider from './StorageProvider/implementations/DiskStorageProvider'
import BCryptHashProvider from '@modules/users/providers/HashProvider/implementations/BCryptHashProvider'

container.registerSingleton<IStorageProvider>(
  'StorageProvider', DiskStorageProvider,
)
