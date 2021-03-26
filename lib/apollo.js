import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
//HttpLink me permite conectarme a la api de graphql, inmemorycache es para manejar el cache
import fetch from "node-fetch";
import { setContext } from "apollo-link-context";

const httpLink = createHttpLink({
  uri: "http://localhost:8080/",
  fetch,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

export default client;
