import styled from 'styled-components'

type StyledProps = {}

const StyledStreakCountryList = styled.ol<StyledProps>`
  display: grid;
  gap: 25px;
  padding: 0;
  width: 100%;

  .streak-result-item {
    display: flex;
    align-items: center;
    font-size: 15px;

    .result-number {
      font-feature-settings: 'tnum';
      margin-right: 20px;
      font-weight: 400;
    }

    .result-flag {
      height: 32px;
      width: 32px;
      position: relative;
      border-radius: 50%;
      box-shadow: 0 0 0 2px #fff;
      background-color: #131315;
      margin-right: 12px;

      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        object-fit: cover;
        border-radius: 50%;
        height: 100%;
        width: 100%;
      }
    }

    .result-name {
      font-weight: 400;

      .result-guessed-name {
        font-size: 12px;
        color: #bababa;
        margin-top: 4px;
      }
    }
  }
`

export default StyledStreakCountryList
