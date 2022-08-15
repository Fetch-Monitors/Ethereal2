import React from 'react'
import { Wrapper, Step, Line } from './elements'

interface Step {
  progress: number
}

export default ({
  secondary,
  steps,
}: {
  secondary?: boolean
  steps: Step[]
}) => {
  return (
    <Wrapper>
      {steps?.map((step, i) => {
        return (
          <React.Fragment key={i}>
            <Step secondary={!!secondary} active={step.progress === 1}>
              {step.progress === 1 ? '✓' : (i + 1)}
            </Step>
            {(i < steps.length - 1) && <Line secondary={!!secondary} progress={step.progress} active={!!step.progress}/>}
          </React.Fragment>
        )
      })}
    </Wrapper>
  )
}
