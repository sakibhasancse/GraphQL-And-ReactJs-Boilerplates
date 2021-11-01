import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apollo';
import Handler from './components/main';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Handler />
    </ApolloProvider>
  );
}

export default App;
