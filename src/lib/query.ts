import { gql } from "@apollo/client";

export const GET_RATES = gql`
  query GetRates {
    markets(filter:{ baseSymbol: {_eq:"BTC"} quoteSymbol: {_eq:"EUR"}}) {
      marketSymbol
      ticker {
        lastPrice
      }
    }
  }
`;
