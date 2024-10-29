import { FC } from 'react'
import { Skeleton } from '@components/system'
import { StyledSkeletonCards } from './'

type Props = {
  numCards?: number
}

const SkeletonCards: FC<Props> = ({ numCards }) => {
  return (
    <StyledSkeletonCards>
      {Array.from({ length: numCards || 12 }).map((_, idx) => (
        <div key={idx} className="skeleton-card-item">
          <Skeleton variant="rectangular" height={120} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Skeleton height={20} width={220} noBorder />
            <Skeleton height={20} width={220} noBorder />
          </div>

          <Skeleton height={40} width={180} />
        </div>
      ))}
    </StyledSkeletonCards>
  )
}

export default SkeletonCards
