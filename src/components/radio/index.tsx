import { AnimateSharedLayout } from 'framer-motion'
import React, { useState } from 'react'
import { Wrapper, Indicator, Option, Circle, Label, Hint } from './elements'

interface Option {
  label?: string
  hint?: string
  id: string
}
export default ({
  secondary,
  options,
  onChange,
  value,
}: {
  secondary?: boolean
  options: Option[]
  value?: Option
  onChange: (arg0: Option) => void
}) => {
  const [state, setState] = useState('0')
  return (
    <Wrapper>
      <AnimateSharedLayout>
        {options.map(({ label, hint, id }, i) => {
          const isSelected =
            value?.id !== undefined ? value.id === id : state === id
          return (
            <Option
              key={id}
              onClick={() => {
                setState(id)
                onChange(options[i])
              }}
            >
              <Circle $isSelected={isSelected} $secondary={!!secondary}>
                {isSelected && (
                  <Indicator
                    $secondary={!!secondary}
                    layoutId="radioIndicator"
                    initial={false}
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 40,
                    }}
                  />
                )}
              </Circle>
              <span style={{ display: 'flex', flexDirection: 'column' }}>
                <Label>{label}</Label>
                <Hint>{hint}</Hint>
              </span>
            </Option>
          )
        })}
      </AnimateSharedLayout>
    </Wrapper>
  )
}
