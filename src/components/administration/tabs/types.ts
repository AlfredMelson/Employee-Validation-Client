import { Empl } from '../../../api/empl'

export interface ITabData {
  index: number
  label: string
  value: 'all' | 'invalid' | 'duplicate' | 'old'
  errorQuantity?: number
  disable?: boolean
}
export interface IPanelData {
  index: number
  employees: Empl[]
}
