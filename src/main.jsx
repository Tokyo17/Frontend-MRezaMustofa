import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';


const client = new ApolloClient({
  uri: 'https://optimum-corgi-31.hasura.app/v1/graphql',
	headers:{
		"x-hasura-admin-secret":
		"dKHsPm53cqnlHZuM3TpUiqgGsVxicG36KEDxAhw2cUeKfOB5R4TS2ab8vRkUaLy9"
	},
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
    
  </React.StrictMode>,
)
