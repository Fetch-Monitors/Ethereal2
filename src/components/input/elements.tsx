import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`

export const InputField = styled.input<{
  dark: boolean
  secondary?: boolean
  minimal?: boolean
  right?: boolean
  icon?: boolean
  error?: boolean
  readOnly?: boolean
}>`
  height: 50px;
  padding: ${(props) =>
    !props.icon ? '0 1rem' : props.right ? '0 2rem 0 1rem' : '0 1rem 0 2.5rem'};
  width: 100%;
  border-radius: ${(props) => props.theme.borderRadius};
  box-sizing: border-box;
  border-style: solid;
  border-width: 2px;
  border-color: #d2d6e9;
  color: ${(props) => (props.dark ? 'white' : 'black')};
  z-index: 0;
  outline: none;
  cursor: ${(props) => (props.readOnly ? 'pointer' : 'text')};
  margin: 2px 0;
  font-size: 16px;
  font-weight: 600;
  transition: 0.1s ease-in-out;

  &:focus {
    border-color: ${(props) =>
      props.secondary ? props.theme.secondary : props.theme.primary};
    box-shadow: ${(props) =>
      !props.minimal &&
      (props.dark
        ? '0px 0px 10px rgba(0, 0, 0, 0.75);'
        : '0px 0px 10px rgba(0, 0, 0, 0.25);')};
  }
  ${(props) =>
    props.minimal &&
    `
  border-top-style: none;
  border-right-style: none;
  border-left-style: none;
  border-radius: 4px 4px 0 0;
  height: 40px;
  padding: 0 .1rem;
`}
  ${(props) =>
    props.minimal && props.icon ? `padding-left: 2.5rem;` : ''}
  ${(props) => props.error && `border-color: ${props.theme.error}!important`};
`

export const IconField = styled.span<{ right: boolean; dark: boolean }>`
  position: absolute;
  z-index: 1;
  margin: ${(props) => (!props.right ? '0 0 0 1rem' : '0 1rem 0 0')};
  left: ${(props) => !props.right && '0'};
  right: ${(props) => props.right && '0'};
  color: ${(props) => (props.dark ? 'white' : 'black')};
  top: 50%;
  transform: translateY(-50%);
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
