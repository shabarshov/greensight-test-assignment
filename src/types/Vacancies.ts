interface Address {
  building: string
  city: string
  description: string
  lat: number
  lng: number
  metro_stations: {
    lat: number
    line_id: string
    line_name: string
    lng: number
    station_id: string
    station_name: string
  }[]
  street: string
}

interface BrandSnippet {
  background: {
    color: string | null
    gradient: {
      angle: number
      color_list: {
        color: string
        position: number
      }[]
    }
  }
  logo: string
  logo_xs: string
  picture: string
  picture_xs: string
}

interface Contacts {
  email: string
  name: string
  phones: {
    city: string
    comment: string | null
    country: string
    number: string
  }[]
}

interface Salary {
  currency: string
  from: number
  gross: boolean
  to: number | null
}

interface Snippet {
  requirement: string
  responsibility: string
}

interface Vacancy {
  accept_incomplete_resumes: boolean
  address: Address
  alternate_url: string
  apply_alternate_url: string
  area: {
    id: string
    name: string
    url: string
  }
  brand_snippet: BrandSnippet
  branding: {
    tariff: string
    type: string
  }
  contacts: Contacts
  counters: {
    responses: number
  }
  department: {
    id: string
    name: string
  }
  employer: {
    accredited_it_employer: boolean
    alternate_url: string
    id: string
    logo_urls: {
      90: string
      240: string
      original: string
    }
    name: string
    trusted: boolean
    url: string
  }
  employment: {
    id: string
    name: string
  }
  has_test: boolean
  id: string
  insider_interview: {
    id: string
    url: string
  }
  name: string
  personal_data_resale: boolean
  professional_roles: {
    id: string
    name: string
  }[]
  published_at: string
  relations: any[]
  response_letter_required: boolean
  response_url: string | null
  salary: Salary
  schedule: {
    id: string
    name: string
  }
  show_logo_in_search: boolean
  snippet: Snippet
  sort_point_distance: number
  type: {
    id: string
    name: string
  }
  url: string
}

interface Vacancies {
  items: Vacancy[]
}

export type { Vacancies }
