import './ScoreComponent.scss';

import { Game } from '../models/Results';

interface Props {
    teamOneResult: number;
    setTeamOneResult: (teamOneResult: number) => void;
    teamTwoResult: number;
    setTeamTwoResult: (teamTwoResult: number) => void;
    playerOneName: string;
    playerTwoName: string;
    newGame: Game[];
    setNewGame: (newGame: Game[]) => void;
}

function ScoreComponent({teamOneResult, setTeamOneResult, teamTwoResult, setTeamTwoResult, playerOneName, playerTwoName, newGame, setNewGame}: Props) {
    return (
        <section className='score-container'>
            <section className='score-wrapper'>
                <p>Vinnare:</p>
                <select className='winning-team-selector' name="winning-team" id="winning-team" onChange={(event) => {
                    // const result: number = parseInt(event.target.value);
                    // setTeamOneResult(result);
                    // if (teamOneResult > teamTwoResult) {
                    //     // Använd result-variabeln istället, för att jämföra
                    //     console.log('Lag ett vann!');  
                    // } else {
                    //     console.log('Lag två vann!');
                    // }
                }}>
                    {/* <option value="DEFAULT">***välj vinnarlag***</option>
                    <option value="one">1</option>
                    <option value="two">2</option> */}
                    <option value="DEFAULT">***välj vinnare***</option>
                    <option value={playerOneName}>{playerOneName}</option>
                    <option value={playerTwoName}>{playerTwoName}</option>
                </select>
            </section>
        </section>
    );
}

export default ScoreComponent;