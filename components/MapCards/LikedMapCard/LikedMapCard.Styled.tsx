import styled from 'styled-components'

const StyledLikedMapCard = styled.div`
  border-radius: 6px;
  background-color: ${({ theme }) => theme.color.gray[900]};
  border: 1px solid ${({ theme }) => theme.color.gray[800]};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: grid;
  gap: 1rem;
  max-height: 300px;

  .map-avatar {
    height: 125px;
    width: 100%;
    border-radius: 5px 5px 0 0;
    position: relative;

    span img {
      border-radius: 5px 5px 0 0;
    }

    .image-gradient {
      z-index: 1;
      position: absolute;
      height: 100%;
      width: 100%;
      background: linear-gradient(180deg, rgba(25, 26, 27, 0) 0%, rgba(25, 26, 27, 0.57) 47.4%, #191a1b 100%);
    }
  }

  .contentWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 18px;
    margin-top: -48px;
  }

  .mapNameWrapper {
    display: grid;

    .mapName {
      font-size: 20px;
      font-weight: 600;
      padding: 0 1rem;
      z-index: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .playWrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 1rem 1rem 2rem 1rem;
  }

  .mapEditBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    height: 40px;
    padding: 0 25px;
    font-size: 1rem;
    font-weight: 500;
    user-select: none;
    width: clamp(120px, 70%, 300px);
    background-color: rgb(255, 255, 255, 0.1);
    color: rgb(255, 255, 255, 0.7);

    &:hover {
      background-color: rgb(255, 255, 255, 0.15);
    }
  }

  .mapPlayBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    height: 40px;
    padding: 0 25px;
    font-size: 1rem;
    font-weight: 500;
    user-select: none;
    width: clamp(120px, 70%, 300px);
    background-color: var(--indigo-700);
    color: #fff;

    :hover {
      background-color: var(--indigo-600);
    }
  }

  .unlike-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 10px;
    font-size: 1rem;
    font-weight: 500;
    user-select: none;
    background-color: rgb(255, 255, 255, 0.1);
    color: rgb(255, 255, 255, 0.7);

    svg {
      height: 22px;
      color: var(--red-500);
    }

    &:hover {
      background-color: rgb(255, 255, 255, 0.15);
    }
  }
`

export default StyledLikedMapCard
