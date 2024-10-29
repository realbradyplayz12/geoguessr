import styled from 'styled-components'

type StyledProps = {}

const StyledDestroyModal = styled.div<StyledProps>`
  .a {
    display: grid;
    gap: 16px;
    padding: 20px;

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .title {
        font-size: 16px;
        position: relative;
        top: 1px;
      }

      .close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        color: var(--color2);
        padding: 6px;
        border-radius: 6px;

        &:hover {
          background-color: #222;
        }
        svg {
          height: 20px;
        }
      }
    }
  }

  .message {
    color: #808080;
    font-weight: 400;
    font-size: 14px;
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 14px;
    padding: 14px 20px;
    border-top: 1px solid #222;
  }
`

export default StyledDestroyModal
