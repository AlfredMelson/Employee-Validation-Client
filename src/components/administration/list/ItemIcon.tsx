import { FunctionComponent } from 'react'

interface IItemIcon {
  name: string
}

const ItemIcon: FunctionComponent<IItemIcon> = ({ name }) => (
  <div className='item-icon'>{name.substring(0, 2)}</div>
)

export default ItemIcon
