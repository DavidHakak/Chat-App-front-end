import {SessionProvider} from 'next-auth/react'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../chakra/theme'
import { ApolloProvider } from '@apollo/client'
import { client } from '../graphql/apollo-client'

export default function App({ Component, pageProps: {session , ...pageProps} }: AppProps) {
  console.log("session : "+ JSON.stringify(session) +"\n page props : " + JSON.stringify(pageProps)  )
  return(
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
         <ChakraProvider theme={theme}>
             <Component {...pageProps} />
         </ChakraProvider>
      </SessionProvider>
    </ApolloProvider>
  )
};
