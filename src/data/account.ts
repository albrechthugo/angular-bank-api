import { v4 } from 'uuid';
import { Account } from './../models/account';

export const account: Account = {
  id: v4(),
  name: 'Alan Turing',
  transactions: []
}