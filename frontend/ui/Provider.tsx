"use client";
import { ApolloProvider } from "@apollo/client";

import { ApolloClient, ApolloLink, InMemoryCache, createHttpLink } from "@apollo/client";

// const httpLink = createHttpLink({
// 	uri: 'http://localhost:3000/graphql',
// })

// const link = ApolloLink.from([
// 	httpLink,
// ])

// const client =  new ApolloClient({
// 	link: link,
// 	cache: new InMemoryCache(),
// })

export function Provider({ children }: { children: React.ReactNode }) {
	const client =  new ApolloClient({
		uri: 'http://localhost:3000/graphql',
		// link: link,
		cache: new InMemoryCache(),
	})
	return (
		<ApolloProvider client={ client }>
			{ children }
		</ApolloProvider>
	)
}
