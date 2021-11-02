import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apollo';
import Handler from './main';
import './App.css'

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Handler />
    </ApolloProvider>
  );
}

export default App;
