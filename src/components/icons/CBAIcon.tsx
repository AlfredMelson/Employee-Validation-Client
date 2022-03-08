import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export default function CBAIcon(props: SvgIconProps): JSX.Element {
  return (
    <SvgIcon viewBox='0 0 48 24' sx={{ width: '34px', height: '17px' }} {...props}>
      <path d='M14.54,9.67H11V8.5H6.38v7H11V14.33h3.5v2.34A2.34,2.34,0,0,1,12.21,19h-7a2.34,2.34,0,0,1-2.33-2.33V7.33A2.34,2.34,0,0,1,5.21,5h7a2.34,2.34,0,0,1,2.33,2.33Z' />
      <path d='M27.5,12a2.34,2.34,0,0,1,2.33,2.33v2.34A2.34,2.34,0,0,1,27.5,19H18.17V5H27.5a2.34,2.34,0,0,1,2.33,2.33V9.67A2.34,2.34,0,0,1,27.5,12ZM21.67,8.5v1.75h4.66V8.5Zm4.66,5.25H21.67V15.5h4.66Z' />
      <path d='M42.79,5h-7a2.34,2.34,0,0,0-2.33,2.33V19H37V15.5h4.66V19h3.5V7.33A2.34,2.34,0,0,0,42.79,5Zm-1.17,7H37V8.5h4.66Z' />
    </SvgIcon>
  )
}
