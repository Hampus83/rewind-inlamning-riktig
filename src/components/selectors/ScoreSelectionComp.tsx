import './ScoreSelectionComp.scss';

interface Props {
    playerOneName: string;
    playerTwoName: string;
    setPlayerOneResult: (playerOneResult: string) => void;
    setPlayerTwoResult: (playerTwoResult: string) => void;
    chosenName: string;
    setChosenName: (chosenName:string) => void;
}

function ScoreSelectionComp({playerOneName, playerTwoName, setPlayerOneResult, setPlayerTwoResult, chosenName, setChosenName}: Props) {
    return (
        <section className='score-container'>
                <label htmlFor="">Vinnare:</label>
                <select value={chosenName} className='winning-team-selector' name="winning-team" id="winning-team" onChange={(event) => {
                    
                    setChosenName(event.target.value)
                    console.log(event.target.value);

                    if (playerOneName == event.target.value ) {
                        setPlayerOneResult('won');
                        setPlayerTwoResult('lost');
                    } else if (playerTwoName == event.target.value) {
                        setPlayerTwoResult('won');
                        setPlayerOneResult('lost');
                    }
                }}>
                    <option hidden={true} value="">***välj vinnare***</option>
                    <option value={playerOneName}>{playerOneName}</option>
                    <option value={playerTwoName}>{playerTwoName}</option>
                </select>
            </section>
    );
}

export default ScoreSelectionComp;