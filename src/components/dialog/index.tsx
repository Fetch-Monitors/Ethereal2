import React, { useEffect, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'
import Button from '../button'
import { Background, Container, Wrapper } from './elements'

const spring = {
	type: 'spring',
	stiffness: 900,
	mass: 1,
	damping: 100,
	bounce: 1,
}

const Dialog = ({
	isOpen,
	onClose,
	children,
	title,
	customButtons,
	custom,
	animation,
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
		},
	]
}) => {
	const ref = useRef<HTMLDivElement>(null)
	useEffect(() => {
		if (ref.current) {
			ref.current.focus()
		}
	}, [])
	const Content = (
		<AnimatePresence>
			{isOpen && (
				<span>
					<Container>
						<Background
							initial={{
								opacity: 0,
							}}
							animate={{
								opacity: 1,
							}}
							exit={{
								opacity: 0,
							}}
						/>
					</Container>
					<Container
						tabIndex={0}
						onKeyDown={(e) => e.key === 'Escape' && onClose()}
					>
						<Wrapper
							ref={ref}
							transition={spring}
							initial={(animation && animation[0]) || { opacity: 0, y: -100 }}
							animate={(animation && animation[1]) || { opacity: 1, y: 0 }}
							exit={
								(animation && (animation[2] || animation[0])) || {
									opacity: 0,
									y: -100,
								}
							}
						>
							{custom ? (
								children
							) : (
								<>
									<h5 style={{ marginBottom: 0 }}>{title || 'Information'}</h5>
									<p>{children}</p>
									{customButtons || (
										<Button variant="outlined" onClick={onClose}>
											Okay
										</Button>
									)}
								</>
							)}
						</Wrapper>
					</Container>
				</span>
			)}
		</AnimatePresence>
	)
	if (typeof window === 'object') {
		return createPortal(Content, document.body)
	}

	return null
}

export default Dialog
