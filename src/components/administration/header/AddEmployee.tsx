import { AddEmplIcon } from '../../icons'
import { AdminHeaderIconButtonSx, ToolTipSx } from '../../mui'

export default function AddEmployee() {
  return (
    <ToolTipSx tooltipTitle={'Add Registrant'}>
      <AdminHeaderIconButtonSx sx={{ mr: '10px' }}>
        <AddEmplIcon />
      </AdminHeaderIconButtonSx>
    </ToolTipSx>
  )
}
