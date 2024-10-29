import styled from 'styled-components'

type StyledProps = {
  size?: number
  fill?: string
}

const StyledSpinner = styled.div<StyledProps>`
  height: ${({ size }) => size ?? 40}px;
  width: ${({ size }) => size ?? 40}px;

  svg {
    height: 100%;
    width: 100%;
    fill: var(--color2);
    animation: loading-spinner 0.75s linear infinite;

    @keyframes loading-spinner {
      100% {
        transform: rotate(1turn);
      }
    }
  }
`

export default StyledSpinner
