import styled from 'styled-components'
import { motion } from 'framer-motion'
import Toast from './toast'

const Wrapper = styled(motion.div)`
	position: fixed;
	z-index: 999;
	bottom: 0px;
	height: 200px;
	padding: 10px;
	max-width: 100%;
	/* left: 50%;
  transform: translateX(-50%); */
	right: 0;
	pointer-events: none;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	gap: 10px;
	overflow: hidden;
`

export default () => (
	<Wrapper>
		<Toast />
		<Toast />
		<Toast />
	</Wrapper>
)
