import './PlayerSelectionComp.scss';

interface Props {
    playerOneName: string;
    setPlayerOneName: (playerOneName: string) => void;
    playerTwoName: string;
    setPlayerTwoName: (playerTwoName: string) => void;
    playerNumber: number;  
}

function PlayerSelectionComp({setPlayerOneName, setPlayerTwoName, playerNumber}: Props) {

    return (
        <div className='player-selection-wrapper'>
            <section className="player-name-container">
                <label htmlFor="player-names">Namn:</label>
                <select className='winning-team' name={`player${playerNumber}`} onChange={(event) => {

                    const selectedName = event.target.value;
                    
                    if (event.target.name == 'player1') {
                        setPlayerOneName(selectedName);
                    } else {
                        setPlayerTwoName(selectedName);
                    }

                }}>
                    <option hidden={true} value="">***välj namn***</option>
                    <option value="Hampus">Hampus</option>
                    <option value="Helena">Helena</option>
                    <option value="Elin">Elin</option>
                    <option value="Agnes">Agnes</option>
                </select>
            </section>
        </div> 
    );
}

export default PlayerSelectionComp;