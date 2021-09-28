import { Transaction } from './models/transaction';
import { Friend } from './models/friend';
import { friends } from './data/friends';
import { account } from './data/account';
import { Account } from './models/account';

export function getFriends(): Array<Friend> {
  return friends
}

export function getFriendBId(id: string): Friend {
  return friends.find(friend => friend.id === id)
}

export function getAccount(): Account {
  return account
}

export function doTransferToFriend({ amount, destinyFriendId, message, type }: Transaction): string {
  const friendIndex = friends.findIndex(friend => friend.id === destinyFriendId)
  friends[friendIndex].balance = friends[friendIndex].balance + amount

  const transaction: Transaction = {
    amount,
    message,
    destinyFriendId,
    type,
    destinyFriendName: friends[friendIndex].name
  }

  account.transactions.push(transaction)

  return friends[friendIndex].id
}