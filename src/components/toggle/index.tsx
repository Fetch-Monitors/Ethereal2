import { motion } from 'framer-motion'
import React, { useContext, useState } from 'react'
import styled, { ThemeContext } from 'styled-components'

const ToggleBackground = styled(motion.div)`
  width: 44px;
  height: 24px;
  background: #d2d6e9;
  display: flex;
  justify-content: flex-start;
  border-radius: 50px;
  cursor: pointer;
  position: relative;
  border-style: solid;
  border-width: 2px;
  border-color: #ffffff;
  box-sizing: content-box;
`

const ToggleCircle = styled(motion.div)`
  width: 18px;
  height: 18px;
  background: #ffffff;
  border-radius: 40px;
  position: absolute;
  top: 3px;
  left: 4px;
  box-sizing: border-box;
`

export default ({
  value,
  onClick,
  secondary,
}: {
  value?: boolean
  onClick: (x: boolean) => void
  secondary?: boolean
}) => {
  const [state, toggle] = useState(false)
  const themeContext = useContext(ThemeContext)

  const click = () => {
    if (value !== undefined) {
      onClick(!value)
    } else {
      onClick(!state)
      toggle(!state)
    }
  }
  return (
    <ToggleBackground
      onClick={click}
      animate={{
        background:
          value || state
            ? secondary
              ? themeContext.secondary
              : themeContext.primary
            : '#d2d6e9',
      }}
      initial={{
        background:
          value || state
            ? secondary
              ? themeContext.secondary
              : themeContext.primary
            : '#d2d6e9',
      }}
      whileHover={{
        borderColor:
          value || state
            ? '#d2d6e9'
            : secondary
            ? themeContext.secondary
            : themeContext.primary,
      }}
    >
      <ToggleCircle
        animate={{
          x: value || state ? 18 : 0,
        }}
        initial={{
          x: value || state ? 18 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 700,
          damping: 40,
        }}
      />
    </ToggleBackground>
  )
}
