import { Empl } from '../../../api/empl'

export interface ITabData {
  index: number
  label: string
  value: number
  disable: boolean
}
export interface IPanelData {
  index: number
  value: number
  employees: Empl[]
}
