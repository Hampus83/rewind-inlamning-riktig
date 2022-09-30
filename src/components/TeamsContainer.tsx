import './TeamsContainer.scss';

import { Results } from '../models/Results';

import PlayerSelectionComp from './selectors/PlayerSelectionComp';
import ScoreSelectionComp from './selectors/ScoreSelectionComp';

import { useEffect } from 'react';

interface Props {
    noOfPlayers: number;
    setNoOfPlayers: (noOfPlayers: number) => void;
    playerOneName: string;
    setPlayerOneName: (playerOneName: string) => void;
    playerTwoName: string;
    setPlayerTwoName: (playerTwoName: string) => void;
    game: string;
    setGame: (game: string) => void;
    results: Results[];
    setResults: (results: Results[]) => void;
    date: string;
    setDate: (date: string) => void;
    playerOneResult: string;
    setPlayerOneResult: (playerOneResult: string) => void;
    playerTwoResult: string;
    setPlayerTwoResult: (playerTwoResult: string) => void;
    chosenName: string;
    setChosenName: (chosenName:string) => void;
}

interface PlayerNumber {
    name: string;
    number: number
}

function TeamsContainer({noOfPlayers, setNoOfPlayers, playerOneName, setPlayerOneName, playerTwoName, setPlayerTwoName, game, setGame, results, setResults, date, setDate, playerOneResult, setPlayerOneResult, playerTwoResult, setPlayerTwoResult, chosenName, setChosenName}: Props) {

    let id = results.length + 1;

    function generatePlayers(number: number): PlayerNumber[] {
        let temp: PlayerNumber[] = [];
        for (let i = 0; i < number; i++) {
            temp[i] = {
                name: '',
                number: 0,
            }
        }
        return temp;
    }

    let arrayOfPlayers = generatePlayers(noOfPlayers);

    function handleClick() {
        
        let newGame: Results = { // MÅSTE TA REDA PÅ SYNTAXEN FÖR ATT ANVÄNDA "game-interface TILL DENNA!!!"
            game: game,
            date: date,
            playerOneName: playerOneName,
            playerOneResult: playerOneResult, 
            playerTwoName: playerTwoName,
            playerTwoResult: playerTwoResult, 
            id: id
        }

        console.log(newGame);
        console.log(results);
        
        results.push(newGame);

        setGame('');
        setNoOfPlayers(0);
        setDate('');
        setPlayerOneName('');
        setPlayerTwoName('');
        setPlayerOneResult('');
        setPlayerTwoResult(''); 
        setChosenName('');  

    }

    useEffect(() => {
        setResults(results);
    }, []);
    
        return (
            <>
                <div className="team-wrapper">
                    <section className="team-container">
                        {arrayOfPlayers.map((temp, i) => (
                        <PlayerSelectionComp
                            playerOneName={playerOneName} setPlayerOneName={setPlayerOneName}
                            playerTwoName={playerTwoName} setPlayerTwoName={setPlayerTwoName}
                            key={i}
                            playerNumber={i + 1}
                        />
                        ))}
                        <ScoreSelectionComp 
                            playerOneName={playerOneName} playerTwoName={playerTwoName}
                            setPlayerOneResult={setPlayerOneResult}
                            setPlayerTwoResult={setPlayerTwoResult}
                            chosenName={chosenName} setChosenName={setChosenName}
                        />
                    </section>
                </div>
                <div className="button-wrapper">
                    <button onClick={ handleClick }>LÄGG TILL RESULTAT</button>
                </div>
            </>
        ); 
}

export default TeamsContainer;