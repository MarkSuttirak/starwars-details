export type DataType = 'planets' | 'starships' | 'vehicles' | 'people' | 'films' | 'species' | string;

export enum DataList {
    Planets = 'planets',
    StarShips = 'starships',
    Vehicles = 'vehicles',
    People = 'people',
    Films = 'films',
    Species = 'species'
}

export interface ListProps {
  params: {
    list: string,
    page_number: number | string
  }
}

export interface FetchDataProps {
  list: DataType
  page?: number | string
  setPage?: (num: number) => void
}

export interface ReadDataProps {
  list: string
  id: string,
  page_number: string | number
}

export interface ListLayoutProps {
  params: {
    list: DataType,
    id: string,
    page_number: string | number
  }
}