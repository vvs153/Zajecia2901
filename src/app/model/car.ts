export enum CarManufacturer{
  BMW='BMW',
  LEXUS='Lexus',
  MERCEDES='Mercedes-Benz',
  VW='Volkswagen',
  MAZDA='Mazda',
  OPEL='Opel',
  FORD='Ford'
}

export type Car = {
  id: number,
  name: string,
  manufacturer: CarManufacturer|undefined,
  model: string,
  engineCapacity: number
}
export const car_default = {
  id: 1,
  name: '',
  manufacturer: undefined,
  model: '',
  engineCapacity: 0.594
}
