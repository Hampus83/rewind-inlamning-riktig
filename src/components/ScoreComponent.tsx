import './ScoreComponent.scss';

import { Results } from '../models/Results';

interface Props {
    playerOneName: string;
    playerTwoName: string;
    setPlayerOneResult: (playerOneResult: string) => void;
    setPlayerTwoResult: (playerTwoResult: string) => void;
}

function ScoreComponent({playerOneName, playerTwoName, setPlayerOneResult, setPlayerTwoResult}: Props) {

    return (
        <section className='score-container'>
            <section className='score-wrapper'>
                <p>Vinnare:</p>
                <select className='winning-team-selector' name="winning-team" id="winning-team" onChange={(event) => {
                    
                    console.log(event.target.value);

                    if (playerOneName == event.target.value ) {
                        setPlayerOneResult('won');
                        setPlayerTwoResult('lost');
                    } else if (playerTwoName == event.target.value) {
                        setPlayerTwoResult('won');
                        setPlayerOneResult('lost');
                    }
                }}>
                    <option value="DEFAULT">***välj vinnare***</option>
                    <option value={playerOneName}>{playerOneName}</option>
                    <option value={playerTwoName}>{playerTwoName}</option>
                </select>
            </section>
        </section>
    );
}

export default ScoreComponent;