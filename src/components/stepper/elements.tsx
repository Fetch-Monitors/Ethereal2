import styled from "styled-components"

export const Wrapper = styled.div`
width: 100%;
height: 60px;
display: flex;
justify-content: space-evenly;
align-items: center;
padding: 0px;
box-sizing: border-box;
`

export const Step = styled.div<{ secondary: boolean; active?: boolean }>`
width: 26px;
height: 26px;
border-radius: 50%;
background: ${(props) =>
  props.active
    ? props.secondary
      ? props.theme.secondary
      : props.theme.primary
    : '#c9ccda'};
flex-shrink: 0;
margin: 0 8px;
text-align: center;
line-height: 26px;
font-size: 12px;
color: white;
user-select: none;
`

export const Line = styled.div<{
active?: boolean
progress?: number
secondary: boolean
}>`
height: 2px;
width: 100%;
background: #d2d6e9;
position: relative;
:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => (props.progress || 0) * 100}%;
  height: 2px;
  background: ${(props) =>
    props.active
      ? props.secondary
        ? props.theme.secondary
        : props.theme.primary
      : '#d2d6e9'};
  transition: 1s ease-in-out;
}
`