import './PlayedGamesList.scss';

import { Results } from '../../models/Results';

import PlayedGame from './PlayedGame';

interface Props {
    results: Results[];
}

function PlayedGamesList({results}: Props) {

    const sortedResults = [...results];

    sortedResults.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else if (a.date > b.date) {
            return -1;
        } else {
            return 0;
        }
    });

    return (
        <div className='list-wrapper'>
            <h1>Spelade matcher</h1>
            <label htmlFor="">Sortera efter spelare:</label>
            <select name="" id="">
                <option value="">***välj namn***</option>
                <option value="Hampus">Hampus</option>
                <option value="Helena">Helena</option>
                <option value="Elin">Elin</option>
                <option value="Agnes">Agnes</option>
            </select>
            <ul className='list'>
                {sortedResults.map((result) => (
                    <PlayedGame result={result} key={result.id} />
                ))}
            </ul>
        </div>
    );
}

export default PlayedGamesList;