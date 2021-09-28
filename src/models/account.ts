import { Transaction } from "./transaction";

export type Account = {
  id: string
  name: string
  transactions: Array<Transaction>
}