import { gql } from "@apollo/client";

export const GET_RATES = gql`
  query GetRates($currency: String!) {
    markets(filter:{ baseSymbol: {_eq: "BTS"} quoteSymbol: {_eq:"EUR"}}) {
      marketSymbol
      ticker {
        lastPrice
      }
    }
  }
`;
