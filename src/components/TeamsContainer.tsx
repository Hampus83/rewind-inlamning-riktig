import './TeamsContainer.scss';

import { Player } from '../models/Results';
import { Game } from '../models/Results';

import PlayerSelectionComp from './selectors/PlayerSelectionComp';
import ScoreComponent from './ScoreComponent';

interface Props {
    noOfPlayers: number;
    // players: Player[];
    // setPlayers: (players: Player[]) => void;
    teamOneResult: number;
    setTeamOneResult: (teamOneResult: number) => void;
    teamTwoResult: number;
    setTeamTwoResult: (teamTwoResult: number) => void;
    team: string;
    setTeam: (team: string) => void;
    newGame: Game[];
    setNewGame: (newGame: Game[]) => void;
    playerOneName: string;
    setPlayerOneName: (playerOneName: string) => void;
    playerTwoName: string;
    setPlayerTwoName: (playerTwoName: string) => void;
    game: string;
    results: Game[];
    setResults: (results: Game[]) => void;
}

interface PlayerNumber {
    name: string;
    number: number
}

function TeamsContainer({noOfPlayers, teamOneResult, setTeamOneResult, teamTwoResult, setTeamTwoResult, team, setTeam, newGame, setNewGame, playerOneName, setPlayerOneName, playerTwoName, setPlayerTwoName, game, results, setResults }: Props) {

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

    function updateWinStatus() {
        // if
        let teamOneWon = true;
        // loopa igenom alla spelare i lag 1
        // 
    }

    function handleClick() {
        console.log('KLICK');
        console.log(newGame);
        
        let newGameCopy = {
            game: game,
            date: '', // fixa datum!
            playerOneName: playerOneName,
            playerOneResult: '', // proppa hit result
            playerTwoName: playerTwoName,
            playerTwoResult: '', //proppa hit result
            id: id
        }

        console.log(newGameCopy);

        results.push(newGameCopy);

        console.log(results);
        
    }

    // console.log(players);
    console.log(noOfPlayers);
    
        return (
            <>
                <div className="wrapper">
                    <section className="team-container">
                        {arrayOfPlayers.map((temp, i) => (
                        <PlayerSelectionComp
                            // players={players} setPlayers={setPlayers}
                            team={team} setTeam={setTeam}
                            newGame={newGame} setNewGame={setNewGame}
                            playerOneName={playerOneName} setPlayerOneName={setPlayerOneName}
                            playerTwoName={playerTwoName} setPlayerTwoName={setPlayerTwoName}
                            key={i}
                        />
                        ))}
                        <ScoreComponent 
                            teamOneResult={teamOneResult} setTeamOneResult={setTeamOneResult}
                            teamTwoResult={teamTwoResult} setTeamTwoResult={setTeamTwoResult}
                            playerOneName={playerOneName} playerTwoName={playerTwoName}
                            newGame={newGame} setNewGame={setNewGame}
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