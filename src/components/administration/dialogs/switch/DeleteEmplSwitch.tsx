import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import React from 'react'
import { UMSwatch } from '../../../../style'

interface IDeleteEmplSwitch {
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function DeleteEmplSwitch({ checked, onChange }: IDeleteEmplSwitch) {
  return (
    <FormControlLabel
      sx={{ color: checked ? UMSwatch.Coral[400] : UMSwatch.Grey[500] }}
      control={<Switch checked={checked} onChange={onChange} />}
      label='Delete all associated data'
    />
  )
}
