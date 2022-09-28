import './PlayedGamesList.scss';

import { Results } from '../../models/Results';

import Result from './PlayedGames';

interface Props {
    results: Results[];
}

function PlayedGamesList({results}: Props) {

    return (
        <div className='list-wrapper'>
            <h1>spelade matcher</h1>
            <ul className='list'>
                {results.map((result) => (
                    <Result result={result} key={result.id} />
                ))}
            </ul>
        </div>
    );
}

export default PlayedGamesList;