import React, { useEffect, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import Button from '../button'
import { Container, Wrapper } from './elements'
import { createPortal } from 'react-dom'

const spring = {
  type: 'spring',
  stiffness: 500,
  mass: 1,
  damping: 50,
  bounce: 1,
}

const dialog: any = ({
  isOpen,
  onClose,
  children,
  title,
  customButtons,
}: {
  isOpen: boolean
  onClose: VoidFunction
  children: React.ReactNode
  title?: string
  customButtons?: React.ReactNode
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
          transition={spring}
          initial={{ backdropFilter: 'brightness(1)' }}
          animate={{ backdropFilter: 'brightness(0.8)' }}
          exit={{ backdropFilter: 'brightness(1)' }}
          onKeyDown={(e) => e.key === 'Escape' && onClose()}
          tabIndex={0}
        >
          <Wrapper
            transition={spring}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            ref={ref}
          >
            <h5>{title || 'Information'}</h5>
            <p>{children}</p>
            {customButtons || (
              <Button variant='outlined' onClick={onClose}>
                Okay
              </Button>
            )}
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
