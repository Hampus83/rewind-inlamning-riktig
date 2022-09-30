import './PlayedGame.scss';

import { Results } from '../../models/Results';

interface Props {
    result: Results;
}

function PlayedGame({result}: Props) {

    return (
        <div className='result-wrapper'>
            <p className='bold'>{result.game}</p>
            <p>{result.date}</p>
            <p className='bold'>{result.playerOneName}</p>
            <p className='team-result-divider'>vs.</p>
            <p className='bold'>{result.playerTwoName}</p>
            <p>{result.playerOneResult}</p>
            <p className='team-result-divider'>-</p>
            <p>{result.playerTwoResult}</p>
        </div>
    );
}

export default PlayedGame;