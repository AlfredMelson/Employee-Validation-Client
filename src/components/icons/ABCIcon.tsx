import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export default function ABCIcon(props: SvgIconProps): JSX.Element {
  return (
    <SvgIcon viewBox='0 0 48 24' sx={{ width: '34px', height: '17px' }} {...props}>
      <path d='M45.12,9.67h-3.5V8.5H37v7h4.66V14.33h3.5v2.34A2.34,2.34,0,0,1,42.79,19h-7a2.34,2.34,0,0,1-2.33-2.33V7.33A2.34,2.34,0,0,1,35.79,5h7a2.34,2.34,0,0,1,2.33,2.33Z' />
      <path d='M27.5,12a2.34,2.34,0,0,1,2.33,2.33v2.34A2.34,2.34,0,0,1,27.5,19H18.17V5H27.5a2.34,2.34,0,0,1,2.33,2.33V9.67A2.34,2.34,0,0,1,27.5,12ZM21.67,8.5v1.75h4.66V8.5Zm4.66,5.25H21.67V15.5h4.66Z' />
      <path d='M12.21,5h-7A2.34,2.34,0,0,0,2.88,7.33V19h3.5V15.5H11V19h3.5V7.33A2.34,2.34,0,0,0,12.21,5ZM11,12H6.38V8.5H11Z' />
    </SvgIcon>
  )
}
