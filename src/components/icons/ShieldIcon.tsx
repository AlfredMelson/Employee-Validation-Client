import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export default function ShieldIcon(props: SvgIconProps): JSX.Element {
  return (
    <SvgIcon sx={{ width: 20, height: 20 }} {...props}>
      <path d='M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z' />
    </SvgIcon>
  )
}
