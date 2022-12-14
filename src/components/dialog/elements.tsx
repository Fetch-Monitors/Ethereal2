import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 696969696969696969696969696969696969696969696969696969696969696969696969;
	&:focus {
		outline: none;
	}
`

export const Background = styled(motion.div)`
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.4);
`

export const Wrapper = styled(motion.div)<{ width?: string; padding?: string }>`
	all: unset;

	z-index: 1001;
	min-width: 360px;
	width: ${({ width }) => width || '360px'};
	max-width: ${({ width }) => width || '96%'};
	padding: ${({ padding }) => padding || '8px 20px'};
	box-sizing: border-box;
	border-radius: ${(props) => props.theme.borderRadius};
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
	background: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	&:focus {
		outline: red;
	}

	& > h5 {
		font-size: 16px;
	}
	& > p {
		display: flex;
		justify-content: center;
		text-align: center;
	}
`
