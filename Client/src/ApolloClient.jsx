import { ApolloClient,createHttpLink, InMemoryCache } from "@apollo/client";
import {setContext} from "@apollo/client/link/context";

const httpLink = createHttpLink({
    uri: "http://localhost:4500/graphql",
  });

const AuthLink =setContext((_, { headers}) => {
    return{
        headers:{
            ...headers,
            authorization:localStorage.getItem("token") || ""
        }
    }
});

const client=new ApolloClient({
    link: AuthLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default client