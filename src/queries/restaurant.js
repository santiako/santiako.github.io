/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

const GET_RESTAURANT = gql`
  query restaurant($id: ID!, $reviewsFilter: JSON) {
    restaurant(id: $id) {
      id
      address
      category {
        name
      }
      description
      price
      anio
      precio
      modeloext
      titulo
      titulo20px
      autoabajo {
        url
      }
      autoabajo2 {
        url
      }
      district
      cover {
        url
      }
      name
      note
      opening_hours {
        id
        day_interval
        opening_hour
        closing_hour
      }
      phone
      noteDetails {
        note
        count
      }
      reviews {
        id
        note
        content
        created_at
        author {
          username
          picture {
            url
          }
        }
      }
      website
    }
    reviewsConnection(where: $reviewsFilter) {
      aggregate {
        count
      }
    }
  }
`;

export { GET_RESTAURANT };
