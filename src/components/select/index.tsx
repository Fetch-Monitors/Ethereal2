import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { useClickAway } from 'react-use'

import Input from '../input'
import Radio from '../radio'
import { MdClose } from 'react-icons/md'
import CheckboxGroup from '../checkbox/group'

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`

const Header = styled(Input)<{ isOpen: boolean }>`
  cursor: pointer;
  padding: 14px;
  border-radius: ${(props) => props.theme.borderRadius};
  border-color: ${(props) =>
    props.isOpen
      ? props.secondary
        ? props.theme.secondary
        : props.theme.primary
      : '#d2d6e9'};
  :hover {
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  }
  transition: 0.1s ease-in-out;
`

const List = styled.ul`
  position: absolute;
  z-index: 3;
  width: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 0;
  margin-top: 6px;
  padding: 14px;
  background: #ffffff;
  box-sizing: border-box;
  max-height: 300px;
  overflow-y: auto;
`

interface Option {
  label?: string
  id: string
}

export default ({
  options,
  onChange,
  defaultOption,
  value,
}: {
  options: Option[]
  onChange: (arg0: Option) => void
  defaultOption?: Option
  value?: Option
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [state, setState] = useState<Option>(
    defaultOption || { label: '', id: '' },
  )
  const ref = useRef(null)
  useClickAway(ref, () => setIsOpen(false))
  useEffect(() => value && setState(value), [value])

  return (
    <Container ref={ref}>
      <Header
        placeholder='Click to select'
        isOpen={isOpen}
        value={state.label}
        readOnly
        onClick={() => (!isOpen ? setIsOpen(true) : setIsOpen(false))}
        icon={
          state.label && (
            <MdClose
              onClick={() => {
                setState({ label: '', id: '' })
                onChange({ label: '', id: '' })
              }}
            />
          )
        }
        right
      />
      {isOpen && (
        <List>
          <Radio
            options={options}
            onChange={(opt) => {
              setState(opt)
              onChange(opt)
              setIsOpen(false)
            }}
            value={value || state}
          />
        </List>
      )}
    </Container>
  )
}

export const MultiSelect = ({
  options,
  onChange,
  defaultOptions,
  value,
}: {
  options: Option[]
  onChange: (arg0: string[]) => void
  defaultOptions?: string[]
  value?: string[]
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [state, setState] = useState<string[]>(defaultOptions || [])
  const ref = useRef(null)
  useClickAway(ref, () => setIsOpen(false))
  useEffect(() => value && setState(value), [value])

  return (
    <Container ref={ref}>
      <Header
        placeholder='Click to select'
        isOpen={isOpen}
        value={state
          .filter((value) => value)
          .map((id) => options.find((opt) => opt.id === id)?.label)
          .reverse()
          .join(', ')}
        readOnly
        onClick={() => (!isOpen ? setIsOpen(true) : setIsOpen(false))}
        icon={
          !!state.filter((value) => value).length && (
            <MdClose
              onClick={() => {
                setState([])
                onChange([])
              }}
            />
          )
        }
        right
      />
      {isOpen && (
        <List>
          <CheckboxGroup
            options={options}
            onChange={(val) => {
              let newState = state
              if (state.includes(val)) {
                newState = newState.filter((opt) => opt !== val)
              } else {
                newState = [...newState, val]
              }
              console.log('val', val)
              console.log(newState)

              setState(newState)
              onChange && onChange(newState)
            }}
            values={state}
          />
        </List>
      )}
    </Container>
  )
}
