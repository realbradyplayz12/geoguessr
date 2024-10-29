import styled from 'styled-components'

type StyledProps = {}

const StyledSkeletonMapInfo = styled.div<StyledProps>`
  .map-details {
    margin-left: 16px;
    margin-top: 2px;
    display: grid;
    gap: 8px;
  }

  .mapDetailsSection {
    background-color: var(--background2);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 6px;

    @media (max-width: 1200px) {
      flex-direction: column;
    }

    @media (max-width: 600px) {
      border-radius: 0;
      border: none;
      background-color: transparent;
    }
  }

  .mapDescriptionWrapper {
    width: 100%;
  }

  .descriptionColumnWrapper {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    width: 100%;
  }

  .descriptionColumn {
    display: flex;
    align-items: center;
  }

  .statsGrid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 15px 20px 20px;

    @media (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    .stat-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 14px;
      background: #ffffff0a;
      border-radius: 6px;
      flex-shrink: 0;
      box-sizing: border-box;
    }
  }
`

export default StyledSkeletonMapInfo
