import Stack from '@mui/material/Stack'
import { ChangeEvent, useState } from 'react'
import { useEmpl } from '../../../../hooks'
import { DialogContentSx, DialogContentTextSx } from '../../../mui'
import { DeleteEmployee } from '../submissions'
import { DeleteEmplSwitch } from '../switch'

interface IDeleteEmplContent {
  emplId: string
  emplFirstname: string
  emplLastname: string
  setDeleteEmplDialogState: (state: boolean) => void
}

export default function DeleteEmplContent({
  emplId,
  emplFirstname,
  emplLastname,
  setDeleteEmplDialogState
}: IDeleteEmplContent) {
  // update email dialog state

  const { deleteEmpl } = useEmpl()

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
    <DialogContentSx>
      <DialogContentTextSx>
        Are you sure that you wish to continue with the deletion of {EmplFullName}'s account?
      </DialogContentTextSx>
      <Stack
        direction='row'
        justifyContent='space-around'
        alignItems='center'
        spacing={20}
        sx={{ mt: '20px' }}>
        <DeleteEmplSwitch checked={checked} onChange={handleChange} />
        <DeleteEmployee
          verified={checked}
          onClick={() => {
            deleteEmpl(emplId), setDeleteEmplDialogState(false)
          }}
          btnText='Delete'
          // submitting={submitting}
          // successSubmit={successSubmit}
        />
      </Stack>
    </DialogContentSx>
  )
}
