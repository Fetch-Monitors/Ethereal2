import styled from 'styled-components'
import { motion } from 'framer-motion'

const Wrapper = styled(motion.div)`
	width: 200px;
	height: 40px;
	background: red;
`

export default () => <Wrapper>Toast :D</Wrapper>
