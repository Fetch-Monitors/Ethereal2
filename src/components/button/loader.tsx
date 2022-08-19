/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react'

import { Button } from './elements'

export default ({
	children,
	variant,
	disabled,
	secondary,
	onClick,
	type,
}: {
	children: React.ReactNode
	variant?: 'solid' | 'outlined' | 'text'
	disabled?: boolean
	secondary?: boolean
	onClick: VoidFunction
	type?: 'button' | 'submit' | 'reset' | undefined
}) => {
	const [loading, setLoading] = useState(false)
	const [err, setErr] = useState('')

	const click = async () => {
		try {
			if (loading) {
				console.log('button is already loading')
			} else {
				setLoading(true)
				await onClick()
				setLoading(false)
				setErr('')
			}
		} catch (e) {
			setErr(`${e}`)
			setLoading(false)
		}
	}

	function createRipple(event: {
		currentTarget: any
		clientX: number
		clientY: number
	}) {
		setLoading(!loading)
		const button = event.currentTarget
		const circle = document.createElement('span')
		const diameter = Math.max(button.clientWidth, button.clientHeight)
		const radius = diameter / 2
		const offsetTop = button.getBoundingClientRect().top
		const offsetLeft = button.getBoundingClientRect().left
		circle.style.height = `${diameter}px`
		circle.style.width = circle.style.height
		circle.style.left = `${event.clientX - offsetLeft - radius}px`
		circle.style.top = `${event.clientY - offsetTop - radius}px`
		circle.classList.add('ripple')

		const ripple = button.getElementsByClassName('ripple')[0]

		if (ripple) {
			ripple.remove()
		}

		if (!disabled) {
			button.appendChild(circle)
		}
	}

	return (
		<Button
			variant={variant || 'solid'}
			disabled={!!disabled}
			secondary={!!secondary}
			style={
				loading
					? { cursor: 'wait', filter: 'brightness(90%)' }
					: { cursor: 'pointer' }
			}
			type={type}
			title={err}
			onClick={click}
		>
			{children}
			{/* {loading && (
          <Loader>
            <FadeLoader height={10} margin={1} width={6} color='white' />
          </Loader>
        )} */}
			<span className="rippleBox" onClick={(e) => createRipple(e)} />
		</Button>
	)
}
