import React, { useEffect, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import Button from '../button'
import { Container, Wrapper } from './elements'
import { createPortal } from 'react-dom'

const spring = {
  type: 'spring',
  stiffness: 900,
  mass: 1,
  damping: 100,
  bounce: 1,
}

const dialog: any = ({
  isOpen,
  onClose,
  children,
  title,
  customButtons,
  custom,
  animation
}: {
  isOpen: boolean
  onClose: VoidFunction
  children: React.ReactNode
  title?: string
  customButtons?: React.ReactNode
  custom?: boolean
  animation?: [
    {
      opacity?: number
      translateY?: number
      translateX?: number
      scale?: number
    },
    {
      opacity?: number
      translateY?: number
      translateX?: number
      scale?: number
    },
    {
      opacity?: number
      translateY?: number
      translateX?: number
      scale?: number
    }
  ]
}) => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (ref.current) {
      ref.current.focus()
    }
  }, [ref.current])
  const content = (
    <AnimatePresence>
      {isOpen && (
        <Container
          initial={{ backdropFilter: 'brightness(1)' }}
          animate={{ backdropFilter: 'brightness(0.8)' }}
          exit={{ backdropFilter: 'brightness(1)' }}
          onKeyDown={(e) => e.key === 'Escape' && onClose()}
          tabIndex={0}
        >
          <Wrapper
            transition={spring}
            initial={animation && animation[0] || { opacity: 0, y: -100 }}
            animate={animation && animation[1] || { opacity: 1, y: 0 }}
            exit={animation && (animation[2] || animation[0]) ||  { opacity: 0, y: -100 }}
            ref={ref}
          >{
            custom ? (children) : (<><h5>{title || 'Information'}</h5>
            <p>{children}</p>
            {customButtons || (
              <Button variant='outlined' onClick={onClose}>
                Okay
              </Button>
            )}</>)
          }
            
          </Wrapper>
        </Container>
      )}
    </AnimatePresence>
  )
  if (typeof window === 'object') {
    return createPortal(content, document.body)
  }
  return null
}

export default dialog
