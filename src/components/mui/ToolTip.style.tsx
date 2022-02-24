import Tooltip from '@mui/material/Tooltip'

type ToolTipSxAlias = {
  children: React.ReactElement
  tooltipTitle?: string
  disabled?: boolean
  placement?: 'top' | 'bottom' | 'left' | 'right'
}

export function ToolTipSx({ tooltipTitle, children, disabled = false, placement }: ToolTipSxAlias) {
  return (
    <Tooltip
      title={`${tooltipTitle}`}
      placement={placement}
      disableFocusListener={disabled}
      disableHoverListener={disabled}
      disableInteractive={disabled}
      disableTouchListener={disabled}>
      {children}
    </Tooltip>
  )
}
