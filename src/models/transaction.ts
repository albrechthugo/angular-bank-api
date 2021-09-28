export type Transaction = {
  type: 'CREDIT' | 'DEBIT'
  amount: number
  destinyFriendId: string
  destinyFriendName: string
  message?: string
}