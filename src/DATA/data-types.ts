export type UsersType = { info: {}; results: ResultsType[] }
export type ResultsType = {
  cell: {}
  dob: {}
  email: {}
  gender: string
  id: {}
  location: {
    city: string
    coordinates: {}
    country: string
    postcode: number
    state: string
    street: {}
    timezone: {}
  }
  login: {}
  name: {
    first: string
    last: string
    title: string
  }
  nat: string
  phone: string
  picture: {}
  registered: {}
}
