import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import schema from './graphql/config'

const app = express()
const PORT = 3000

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})