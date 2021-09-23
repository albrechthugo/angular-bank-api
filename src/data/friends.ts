import { Friend } from 'models/friend'
import { v4 } from 'uuid'

export const friends: Array<Friend> = [
  { id: v4(), name: 'Felipe Silva', username: 'felipesilva', balance: 20 },
  { id: v4(), name: 'Joao da Costa', username: 'costajoao1', balance: 0 },
  { id: v4(), name: 'Lara McCurdy', username: 'mccurdylara', balance: 12 },
  { id: v4(), name: 'Adailton Pereira', username: 'pereira.ad', balance: 9 },
]