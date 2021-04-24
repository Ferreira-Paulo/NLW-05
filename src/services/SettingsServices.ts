import { getCustomRepository } from "typeorm"
import { SettingsRepository } from "../repositories/SettingsRepository"

interface ISettingsCreate {
  chat: boolean
  username: string
}

class SettingsService {
  async create({ chat, username } : ISettingsCreate ) {
    const settingsRepository = getCustomRepository(SettingsRepository)

    //select * from settings where username = "username" limit 1;
    const userAlreadyEcists = await settingsRepository.findOne({ 
      username
     })

     if (userAlreadyEcists) {
       throw new Error("User already exist!")
     }
  
    const settings = settingsRepository.create({
      chat,
      username
    })
  
    await settingsRepository.save(settings)

    return settings
  }
}

export { SettingsService }