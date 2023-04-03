import { ApolloClient, ApolloLink, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
	uri: 'http://localhost:3000/graphql',
})

const link = ApolloLink.from([
	httpLink,
])

const client =  new ApolloClient({
	link: link,
	cache: new InMemoryCache(),
})

export default client
