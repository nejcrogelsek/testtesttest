import { gql } from '@apollo/client'

export const GET_SHIPS = gql`
  query shipsQuery {
    ships {
      id
      name
      image
      type
    }
  }
`

export const GET_SHIP_BY_ID = gql`
  query shipQuery($id: ID!) {
    ship(id: $id) {
      name
      image
      type
      weight_kg
      year_built
      class
      missions {
        flight
        name
      }
      home_port
    }
  }
`
