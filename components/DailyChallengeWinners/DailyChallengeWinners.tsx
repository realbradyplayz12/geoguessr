import { FC } from 'react'
import { MapLeaderboardType } from '@types'
import { StyledDailyChallengeWinners } from './'
import { WinnerItem } from './WinnerItem'

type Props = {
  removeHeader?: boolean
  prevWinners: MapLeaderboardType[]
}

const DailyChallengeWinners: FC<Props> = ({ removeHeader, prevWinners }) => {
  return (
    <StyledDailyChallengeWinners>
      {!removeHeader && (
        <div className="leaderboardTop">
          <span className="title">Previous Winners</span>
        </div>
      )}

      {prevWinners.length > 0 ? (
        prevWinners.map((winner, idx) => <WinnerItem key={idx} winner={winner} />)
      ) : (
        <span className="notPlayedMsg">No daily challenge winners found...</span>
      )}
    </StyledDailyChallengeWinners>
  )
}

export default DailyChallengeWinners
