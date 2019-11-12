import { Decorator } from 'final-form'

export type FieldName = string

export type FieldPattern = FieldName | RegExp | FieldName[]

export type UpdatesByName<T = Object> = {
  [FieldName: string]: (value: any, allValues?: T, prevValues?: T) => any
}

export type UpdatesForAll<T = Object> = (
  value: any,
  field: string,
  allValues?: T,
  prevValues?: T
) => { [FieldName: string]: any }

export type Updates<T = Object> = UpdatesByName<T> | UpdatesForAll<T>

export type Calculation<T = Object> = {
  field: FieldPattern
  updates: Updates<T>
  isEqual?: (a: any, b: any) => boolean
}

export default function createDecorator<T = Object>(
  ...calculations: Calculation<T>[]
): Decorator
