import crypto from "crypto"

let books = [
  {
    id: crypto.randomUUID(),
    title: "harry potter",
    author: "JK Rowling"
  },
  {
    id: crypto.randomUUID(),
    title: "le seigneur des anneaux",
    author: "Richardson Jason"
  },

]

export const typeDefs = `#graphql
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    books: [Book]
  }
`

export const resolvers = {
  Query: {
    books: () => books
  }
}