import { FunctionComponent, memo } from 'react'

interface IErrorBlock {
  errorMessage: string
  ref?: any
}

const ErrorBlock: FunctionComponent<IErrorBlock> = ({ errorMessage, ref }) => {
  if (!errorMessage) {
    return null
  }

  /*
   * aria-live="assertive" will have a screen reader annouce the message immediately.
   */

  return (
    <div>
      <p ref={ref} className={errorMessage ? 'errorMessage' : 'offscreen'} aria-live='assertive'>
        {errorMessage}
      </p>
    </div>
  )
}

export default memo(ErrorBlock)
