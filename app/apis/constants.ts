export const TOKEN_AUTH = process.env.API_TOKEN_AUTH;
export const API_URL = process.env.URL_API_BACKEND;
export const GET_HEADERS_REQUEST = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${TOKEN_AUTH}`,
  },
};