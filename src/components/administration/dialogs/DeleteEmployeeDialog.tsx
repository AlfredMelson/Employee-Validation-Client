import Stack from '@mui/material/Stack'
import { ChangeEvent, useState } from 'react'
import { useEmpl } from '../../../hooks'
import { DeleteEmplIcon } from '../../icons'
import { DialogContentSx, DialogContentTextSx, DialogSx, IconButtonSx, ToolTipSx } from '../../mui'
import { DialogHeader } from './header'
import { DeleteEmployee } from './submissions'
import { DeleteEmplSwitch } from './switch'

interface IDeleteEmployeeDialog {
  emplId: string
  emplFirstname: string
  emplLastname: string
}

export default function DeleteEmployeeDialog({
  emplId,
  emplFirstname,
  emplLastname
}: IDeleteEmployeeDialog) {
  // update email dialog state
  const [open, setOpen] = useState(false)

  const { deleteEmpl } = useEmpl()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  // error reference
  // const errorReference = useRef<HTMLParagraphElement | null>(null)

  // const handleEmplDeletion = async event => {
  //   event.preventDefault()
  //   deleteEmpl(emplEmail)

  //   try {
  //     // const response = await axios.delete(
  //     //   // pull in the update endpoint
  //     //   API.DeleteEmployee,

  //     //   // pull in the employee data
  //     //   JSON.stringify({ emplName, emplEmail })
  //     // )

  //     await api.delete(`${API.DeleteEmployee}/${emplEmail}`)
  //     const emplList = empls.filter(empl => empl.emplEmail !== emplEmail)
  //     setEmpls(emplList)

  //     setOpen(false)

  //     // open error alert if there is a caught error
  //   } catch (error) {
  //     errorReference.current.focus()
  //   }
  // }

  const [checked, setChecked] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  const EmplFullName = `${emplFirstname} ${emplLastname}`

  return (
    <>
      <ToolTipSx tooltipTitle={'Delete'}>
        <IconButtonSx onClick={handleClickOpen} aria-label='delete registrant' sx={{ mr: '4px' }}>
          <DeleteEmplIcon />
        </IconButtonSx>
      </ToolTipSx>
      <DialogSx open={open} onClose={handleClose}>
        <DialogHeader title={EmplFullName} onClick={handleClose} />
        <DialogContentSx>
          <DialogContentTextSx>
            Are you sure that you wish to continue with the deletion of {EmplFullName}'s account?
          </DialogContentTextSx>
          <Stack
            direction='row'
            justifyContent='center'
            alignItems='center'
            spacing={20}
            sx={{ mt: '20px' }}>
            <DeleteEmplSwitch checked={checked} onChange={handleChange} />
            <DeleteEmployee
              verified={checked}
              onClick={() => deleteEmpl(emplId)}
              btnText='Delete'
              // submitting={submitting}
              // successSubmit={successSubmit}
            />
          </Stack>
        </DialogContentSx>
      </DialogSx>
    </>
  )
}
