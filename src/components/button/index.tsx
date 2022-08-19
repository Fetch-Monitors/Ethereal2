/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'

import { Button } from './elements'

export default ({
	children,
	variant,
	disabled,
	secondary,
	onClick,
	loading,
	type,
	outlined,
	text,
}: {
	children: React.ReactNode
	variant?: 'solid' | 'outlined' | 'text'
	disabled?: boolean
	secondary?: boolean
	onClick?: VoidFunction
	loading?: boolean
	type?: 'button' | 'submit' | 'reset' | undefined
	outlined?: boolean
	text?: boolean
}) => {
	function createRipple(event: {
		currentTarget: any
		clientX: number
		clientY: number
	}) {
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
			variant={text ? 'text' : outlined ? 'outlined' : variant || 'solid'}
			disabled={!!disabled}
			secondary={!!secondary}
			$loading={!!loading}
			type={type}
			onClick={
				!loading && !disabled
					? onClick
					: () => console.log('button is loading or disabled')
			}
		>
			{children}
			<span className="rippleBox" onClick={(e) => createRipple(e)} />
		</Button>
	)
}
