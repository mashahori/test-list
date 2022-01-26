import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { client } from './lib/apolloClient';
import { ApolloProvider } from "@apollo/client";

// client
//   .query({
//     query: gql`
//       query GetRates {
//         markets(filter:{ baseSymbol: {_eq:"BTC"} quoteSymbol: {_eq:"EUR"}}) {
//           marketSymbol
//           ticker {
//             lastPrice
//           }
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
