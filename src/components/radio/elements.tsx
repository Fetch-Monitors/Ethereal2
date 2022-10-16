import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	gap: 20px;
	margin-bottom: 10px;
`

export const Option = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	cursor: pointer;
`

export const Circle = styled.div<{ $isSelected: boolean; $secondary: boolean }>`
	box-sizing: border-box;
	height: 17px;
	width: 17px;
	margin-right: 10px;
	border-radius: 50%;
	position: relative;
	border-style: solid;
	border-width: 2px;
	border-color: ${(props) =>
		props.$isSelected
			? props.$secondary
				? props.theme.secondary
				: props.theme.primary
			: '#d2d6e9'};
	${Option}:hover & {
		border-color: ${(props) =>
			props.$secondary ? props.theme.secondary : props.theme.primary};
	}
	:hover {
		border-color: red;
	}
	transition: 0.2s ease-in-out;
	position: relative;
`

export const Indicator = styled(motion.div)<{ $secondary: boolean }>`
	position: absolute;
	margin: 0;
	top: -2px;
	left: -2px;
	width: 100%;
	height: 100%;
	border-radius: 50%;
	border-style: solid;
	border-width: 2px;
	border-color: transparent;
	:before {
		content: '';
		position: absolute;
		top: 2px;
		left: 2px;
		width: 9px;
		height: 9px;
		border-radius: 50%;
		background: ${(props) =>
			props.$secondary ? props.theme.secondary : props.theme.primary};
	}
`

export const Label = styled.p`
	font-size: 16px;
	font-weight: 500;
	margin: 5px 0;
	line-height: 16px;
`

export const Hint = styled.span<{ color?: string }>`
	font-size: 11px;
	line-height: 11px;
	margin: auto 5px auto 0;
	color: ${(props) => props.color || '#333'};
`
