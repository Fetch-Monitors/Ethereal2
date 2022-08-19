import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button<{
	secondary?: boolean
	color?: string
	big?: boolean
}>`
	all: unset;
	width: ${(props) => (props.big ? '100%' : '54px')};
	height: 54px;
	border-style: solid;
	border-width: 2px;
	border-color: #d2d6e9;
	border-radius: 4px;

	margin: 0 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.1s ease-in-out;
	font-size: 24px;
	cursor: pointer;
	color: ${(props) => props.color || '#000'};
	box-sizing: border-box;
	:hover {
		border-color: ${(props) =>
			props.color
				? props.color
				: props.secondary
				? props.theme.secondary
				: props.theme.primary};
	}
	:active {
		border-width: 3px;
	}

	p {
		margin-right: 10px;
		font-size: 16px;
		font-weight: bold;
		${(props) => !props.big && 'display: none'}
	}
`

export default ({
	children,
	color,
	secondary,
	text,
	onClick,
}: {
	children: React.ReactNode
	color?: string
	text?: string
	secondary?: boolean
	onClick?: () => void
}) => (
	<Wrapper secondary={secondary} color={color} big={!!text} onClick={onClick}>
		<p>{text}</p>
		{children}
	</Wrapper>
)
