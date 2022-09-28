import './PlayedGames.scss';

import { Results } from '../../models/Results';

interface Props {
    result: Results;
}

function PlayedGames({result}: Props) {

    return (
        <div className='result-wrapper'>
            <p>{result.game}</p>
            <p>{result.date}</p>
            {/* <p>{result.teamOneResult}</p> */}
            <p className='team-result-divider'>-</p>
            {/* <p>{result.teamTwoResult}</p> */}
            {/* <p>{result.players.map((player) => player.name)}</p> */}
        </div>
    );
}

export default PlayedGames;