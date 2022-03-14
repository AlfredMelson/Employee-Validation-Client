import { Empl } from '../../../api/empl'

export type TabValueType = 'all' | 'invalid' | 'duplicate' | 'old'

export interface ITabData {
  label: string
  value: 'all' | 'invalid' | 'duplicate' | 'old'
  errorQuantity?: number
  disable?: boolean
}
export interface IPanelData {
  index: number
  employees: Empl[]
}
