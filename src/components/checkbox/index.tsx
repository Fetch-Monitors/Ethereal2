import React, { useState, useContext } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { ThemeContext } from 'styled-components'

const tickVariants = {
  pressed: (isChecked: boolean) => ({ pathLength: isChecked ? 0.85 : 0.2 }),
  checked: { pathLength: 1 },
  unchecked: { pathLength: 0 },
}

const boxVariants = (color: string) => ({
  hover: { scale: 1.05, strokeWidth: 60 },
  pressed: { scale: 0.95, strokeWidth: 35 },
  checked: { stroke: color, strokeWidth: 40 },
  unchecked: { stroke: '#d2d6e9', strokeWidth: 50 },
})

export default ({
  value,
  onChange,
  secondary
}: {
  value?: boolean
  onChange?: (arg0: boolean) => void
  secondary?: boolean
}) => {
  const [checked, setChecked] = useState(value || false)
  const pathLength = useMotionValue(0)
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1])
  const themeContext = useContext(ThemeContext)

  const isChecked = value !== undefined ? value : checked

  const setIsChecked = () => {
    setChecked(!isChecked)
    if (onChange) {
      onChange(!isChecked)
    }
  }

  return (
    <motion.svg
      initial={isChecked ? 'checked' : 'unchecked'}
      animate={isChecked ? 'checked' : 'unchecked'}
      whileHover="hover"
      whileTap="pressed"
      width="26"
      height="26"
      viewBox="0 0 440 440"
      onClick={() => setIsChecked()}
      style={{ cursor: 'pointer' }}
    >
      <motion.path
        d="M 72 136 C 72 100.654 100.654 72 136 72 L 304 72 C 339.346 72 368 100.654 368 136 L 368 304 C 368 339.346 339.346 368 304 368 L 136 368 C 100.654 368 72 339.346 72 304 Z"
        strokeWidth="30"
        stroke="#d2d6e9"
        fill="#ffffff"
        variants={boxVariants(secondary? themeContext.secondary : themeContext.primary)}
      />
      <motion.path
        d="M 140 220 l 60 60 l 90 -120"
        fill="transparent"
        strokeWidth="65"
        stroke={secondary ? themeContext.secondary : themeContext.primary}
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={tickVariants}
        style={{ pathLength, opacity }}
        custom={isChecked}
      />
    </motion.svg>
  )
}
