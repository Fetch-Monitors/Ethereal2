import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Wrapper = styled(motion.div)`
	box-sizing: border-box;
	top: 0;
	right: 0;
	width: fit-content;
	height: 100vh;
	padding: 20px;
	width: fit-content;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-rendering: optimizeLegibility;
	background: white;
	z-index: 3;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	position: absolute;

	/* :before {
    content: '';
    // scroll bar
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 4px;
    width: 4px;
    border-radius: 10px;
    height: 100px;
    background: #d2d6e9;
    z-index: 10;

  } */
`

export const Tag = styled.div`
	box-sizing: border-box;
	vertical-align: top;
	-webkit-box-align: center;
	align-items: center;
	width: 270px;
	max-width: 270px;
	font-weight: 500;
	outline: transparent solid 2px;
	outline-offset: 2px;
	min-height: 1.5rem;
	min-width: 1.5rem;
	font-size: 14px;
	/* border-radius: ${(props) => props.theme.borderRadius}; */
	padding: 4px 0px 4px 8px;
	margin: 4px 0;
	/* background: #edf2f7; */
	border-left: 2px solid ${(props) => props.theme.primary}90;
	color: #4e4e4e;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`

export const Information = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	box-sizing: border-box;
	border: 1px solid #d2d6e9;
	border-radius: ${({ theme }) => theme.borderRadius};
	padding: 8px;
	font-size: 13px;
	line-height: 13px;
	margin-bottom: 20px;
`

export const Top = styled(motion.span)`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	flex-shrink: 0;

	h4 {
		margin: 10px 0;
		font-weight: 600;
	}
`

export const Bottom = styled.span`
	flex-shrink: 0;
	width: 100%;
	height: 120px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

export const Segment = styled.div`
	width: fit-content;
	min-width: 200px;
	display: flex;
	justify-content: space-evenly;
	flex-direction: column;
`

export const Br = styled.div`
	margin-bottom: 18px;
	border-bottom: 1px solid #aaa;
`

export const Title = styled.div<{ center?: boolean }>`
	width: fit-content;
	font-size: 12px;
	text-transform: uppercase;
	font-weight: thin;
	color: #555;
	margin-bottom: 20px;
	${(props) =>
		props.center &&
		`
    width: 100%;
    textAlign: center;
  `}
`

export const Option = styled.div<{ horizontal?: boolean }>`
	width: fit-content;
	display: flex;
	flex-direction: row;
	min-width: 280px;
	max-width: 280px;
	justify-content: space-between;
	margin-bottom: 14px;
	padding: 0 5px;
	& > span {
		display: flex;
		justify-content: center;
		flex-direction: ${(props) => (props.horizontal ? 'row' : 'column')};
		&:only-child {
			width: 100%;
		}
	}
	align-items: center;
`

export const Label = styled.label`
	width: fit-content;
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

export const Buttons = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	& > button {
		width: 100%;
	}
	gap: 0 10px;
`
