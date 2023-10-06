export interface User {
  bill_address: {
    address1: string,
    address2: string,
    alternative_phone: string,
    city: string,
    company: string,
    country: {
      id: number,
      iso: string,
      iso3: string,
      iso_name: string,
      name: string,
      numcode: number
    },
    country_id: number,
    country_iso: string,
    id: number,
    name: string,
    phone: string,
    state: {
      abbr: string,
      country_id: number,
      id: number,
      name: string
    },
    state_id: number,
    state_name: string,
    state_text: string,
    zipcode: string
  },
  created_at: string,
  email: string,
  id: number,
  ship_address: {
    address1: string,
    address2: string,
    alternative_phone: string,
    city: string,
    company: string,
    country: {
      id: number,
      iso: string,
      iso3: string,
      iso_name: string,
      name: string,
      numcode: number
    },
    country_id: number,
    country_iso: string,
    id: number,
    name: string,
    phone: string,
    state: {
      abbr: string,
      country_id: number,
      id: number,
      name: string
    },
    state_id: number,
    state_name: string,
    state_text: string,
    zipcode: string
  },
  updated_at: string
}

export interface CurrentUser {
  name: string;
  email: string;
  token: string;
}