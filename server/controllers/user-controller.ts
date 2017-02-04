import { Controllers } from 'js-data-dao/lib/'
import { IUser, UserDAO } from '../models/user'
import * as JSData from 'js-data'
import { Config } from 'js-data-dao'

export class UserController extends Controllers.BasePersistController<IUser> {
  public constructor(store: JSData.DataStore, appConfig: Config.AppConfig) {
    super(new UserDAO(store, appConfig))
  }
}
