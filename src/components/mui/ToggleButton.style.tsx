import { styled } from '@mui/material/styles'
import ToggleButton, { ToggleButtonProps } from '@mui/material/ToggleButton'
import { useSetRecoilState } from 'recoil'
import { alphabeticalSortAtom } from '../../recoil-state'
import { UMSwatch } from '../../style'
import { ABCIcon, CBAIcon } from '../icons'
import { ToolTipSx } from './ToolTip.style'

const ToggleButtonStyle = styled((props: ToggleButtonProps) => <ToggleButton {...props} />, {
  name: 'ToggleButton',
  slot: 'style'
})(({ theme }) => ({
  height: '36px',
  color: UMSwatch.Blue[500],
  backgroundColor: 'transparent',
  border: 'none',
  transition: theme.transitions.create(['color'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut
  }),
  '&:hover, &.Mui-focused ': {
    color: UMSwatch.Blue[400]
  },
  '&.Mui-selected': {
    cursor: 'default',
    color: UMSwatch.White[50]
  },
  '&.Mui-disabled': {
    color: 'transparent'
  }
}))

interface IToggleButtonSx {
  label: string
  value: string
  selection: string
}

export const ToggleButtonSx = ({ label, value, selection }: IToggleButtonSx) => {
  const setAlphabeticalSort = useSetRecoilState(alphabeticalSortAtom)

  const handleClick = (_event: React.MouseEvent<HTMLElement>, value: any) => {
    setAlphabeticalSort(value)
  }

  return (
    <ToolTipSx tooltipTitle={label}>
      <ToggleButtonStyle
        selected={selection === value}
        onClick={handleClick}
        disableRipple
        value={value}
        aria-label={label}>
        {value === 'alphabetical' ? <ABCIcon /> : <CBAIcon />}
      </ToggleButtonStyle>
    </ToolTipSx>
  )
}
