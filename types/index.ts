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
    list: string
  }
}

export interface ListLayoutProps {
  params: {
    list: DataType,
    id: number
  },
  children: React.ReactNode
}