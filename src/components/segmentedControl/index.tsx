import { AnimateSharedLayout, motion } from 'framer-motion'
import React, { ReactNode } from 'react'
import styled from 'styled-components'

const Wrapper = styled(motion.div)<{ secondary?: boolean }>`
  width: 100%;
  padding: 6px;
  background: ${(props) =>
    props.secondary ? props.theme.secondary : props.theme.primary};
  display: flex;
  justify-content: space-evenly;
  border-radius: ${(props) => props.theme.borderRadius};
  cursor: pointer;
  position: relative;
`
const Segment = styled(motion.button)<{ secondary?: boolean }>`
  width: 100%;
  height: 40px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  position: relative;
  background: ${(props) =>
    props.secondary ? props.theme.secondary : props.theme.primary};
  cursor: pointer;
  :hover {
    background: ${(props) =>
      props.secondary ? props.theme.secondary : props.theme.primary}11;
  }
  color: #ffffff;
`

const Outline = styled(motion.div)<{ secondary?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: ${(props) => parseInt(props.theme.borderRadius) - 2}px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    props.secondary ? props.theme.secondary : props.theme.primary};
  background: #ffffff;
  z-index: 2;
`

export interface Option {
  label: ReactNode
  id: string
}

export default ({
  value,
  onChange,
  secondary,
  options
}: {
  value?: string
  onChange: (arg0: Option) => void
  secondary?: boolean
  options: Option[]
}) => {
  return (
    <Wrapper secondary={secondary}>
      <AnimateSharedLayout>
        {options.map((option, index) => (
          <Segment
            key={option.id}
            onClick={() => {
              onChange(options[index])
            }}
            secondary={secondary}
          >
            {option.label}{' '}
            {option.id === value && (
              <Outline
                secondary={secondary}
                layoutId='outline'
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 40
                }}
              >
                {options[index].label}
              </Outline>
            )}
          </Segment>
        ))}
      </AnimateSharedLayout>
    </Wrapper>
  )
}
