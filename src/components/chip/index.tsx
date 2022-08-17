import React, { ReactNode, useState } from 'react'
import styled from 'styled-components'
import Dialog from '../dialog'

const Wrapper = styled.span<{ secondary: boolean }>`
	box-sizing: content-box;
	color: ${(props) =>
		props.secondary ? props.theme.secondary : props.theme.primary};
	padding: 4px;
	cursor: pointer;
	position: relative;
	border-color: #e0e3eb;
	border-style: solid;
	border-width: 1px;
	z-index: 4;
	font-size: 11px;
	margin: 5px 0;
	:hover {
		border-color: ${(props) =>
			props.secondary ? props.theme.secondary : props.theme.primary};
	}
	border-radius: 12px;
	transition: background 0.2s ease-in-out;
`

const Help = styled.span<{ icon?: boolean }>`
	box-sizing: border-box;
	position: relative;
	/* display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: stretch;
  justify-content: space-between;
  align-items: center; */
	padding-left: ${(props) => (props.icon ? '14px' : '2px')};
	padding-right: 2px;
	span {
		display: inline-flex;
		position: absolute;
		left: 0;
	}
`

export default ({
	children,
	secondary,
	onClick,
	dialog,
	dialogTitle,
	icon,
}: {
	children: string
	secondary?: boolean
	onClick?: () => void
	dialog?: string
	dialogTitle?: string
	icon?: ReactNode
}) => {
	const [open, setOpen] = useState(false)
	return (
		<>
			<Wrapper
				secondary={!!secondary}
				onClick={() => {
					setOpen(true)
					if (onClick) {
						onClick()
					}
				}}
			>
				<Help icon={!!icon}>
					<span>{icon}</span>
					{children}
				</Help>
			</Wrapper>
			{dialog && (
				<Dialog
					isOpen={open}
					title={dialogTitle}
					onClose={() => setOpen(false)}
				>
					{dialog}
				</Dialog>
			)}
		</>
	)
}
