import './PlayedGamesList.scss';

import { Results } from '../../models/Results';

import PlayedGame from './PlayedGame';
import { useState, useEffect } from 'react';

interface Props {
    results: Results[];
    setResults: (results: Results[]) => void;
}

function PlayedGamesList({results, setResults}: Props) {

    const [chosenPlayer, setChosenPlayer] = useState<string>('');
    const [chosenGame, setChosenGame] = useState<string>('');
    
    let sortedResults = [...results];
    let filteredResults = [...sortedResults];

    // FILTRERA RESULTAT EFTER SPELARNAMN:
    let filteredByPlayer: Results[];

    if (chosenPlayer) {
            filteredByPlayer = sortedResults.filter(result => 
            result.playerOneName == chosenPlayer || result.playerTwoName == chosenPlayer
        );
        filteredResults = filteredByPlayer;

    } else {
        filteredByPlayer = sortedResults;
    }

    // FILTRERA RESULTAT EFTER TYP AV SPEL/SPORT:
    let filteredByGame: Results[];

    if (chosenGame) {
        filteredByGame = sortedResults.filter(result => 
            result.game == chosenGame  
        );
        filteredResults = filteredByGame; 
           
    } else {
        filteredByGame = sortedResults;
    }

    function resetFilters() {
        setChosenGame('');
        setChosenPlayer('');
    }

    filteredResults.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else if (a.date > b.date) {
            return -1;
        } else {
            return 0;
        }
    });

    let chosenPlayerGamesWon: Results[] = [];

    function calcTotalGamesWon() {

        const lastTenGames = filteredResults.slice(0, 10);

        chosenPlayerGamesWon = lastTenGames.filter((result) => {
            if (chosenPlayer === result.playerOneName && result.playerOneResult === "won") {
                return result;
            } else if (chosenPlayer === result.playerTwoName && result.playerTwoResult === "won") {
                return result;
            }

            // console.log('vinster:', result);
        });
    }

    calcTotalGamesWon();

    let playerInfo: string = '';

    if (chosenPlayer) {
        playerInfo = `Spelare ${chosenPlayer} har vunnit ${chosenPlayerGamesWon.length} matcher av de 10 senast spelade`;
    }
    
    return (
        <div className='list-wrapper'>
            {/* <h1 className='title'>Spelade matcher</h1> */}
            <div className="filter-wrapper">
                <section className="select-wrapper">
                    <label htmlFor="">Filtrera efter spelare:</label>
                    <select value={chosenPlayer} name="player-sort" id="player-sort" onChange={(event) => {

                        setChosenPlayer(event.target.value);

                    }}>
                        <option value="">***välj namn***</option>
                        <option value="Hampus">Hampus</option>
                        <option value="Helena">Helena</option>
                        <option value="Elin">Elin</option>
                        <option value="Agnes">Agnes</option>
                    </select>
                    <label htmlFor="">Filtrera efter spel/sport:</label>
                    <select value={chosenGame} name="game-sort" id="game-sort" onChange={(event) => {

                        setChosenGame(event.target.value);

                    }}>
                        <option value="">***välj spel/sport***</option>
                        <option value="Hockey">Hockey</option>
                        <option value="Fotboll">Fotboll</option>
                        <option value="Singla slant">Singla slant</option>
                    </select>
                    <button onClick={ resetFilters }>NOLLSTÄLL FILTER</button>
                </section>
                <section className="message-container">
                    <p>{playerInfo}</p>
                </section>
            </div>
            <ul className='list'>
                {filteredResults.map((result) => (
                    <PlayedGame result={result} key={result.id} />
                ))}
            </ul>
        </div>
    );
}

export default PlayedGamesList;