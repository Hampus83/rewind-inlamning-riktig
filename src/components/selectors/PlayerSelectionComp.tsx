import './PlayerSelectionComp.scss';

import { Results } from '../../models/Results';

import { useEffect } from 'react';

interface Props {
    playerOneName: string;
    setPlayerOneName: (playerOneName: string) => void;
    playerTwoName: string;
    setPlayerTwoName: (playerTwoName: string) => void;
    playerNumber: number;  
}

function PlayerSelectionComp({playerOneName, setPlayerOneName, playerTwoName, setPlayerTwoName, playerNumber}: Props) {

    // useEffect(() => {
    //     console.log('P1:', playerOneName);
    //     console.log('P2:', playerTwoName);
    // });

    return (
        <form className='playernames-form'>
            <label htmlFor="player-names">Namn:</label>
                <select className='winning-team' name={`player${playerNumber}`} onChange={(event) => {

                    const selectedName = event.target.value;
                    
                    if (event.target.name == 'player1') {
                        setPlayerOneName(selectedName);
                    } else {
                        setPlayerTwoName(selectedName);
                    }

                }}>
                    <option value="">***välj namn***</option>
                    <option value="Hampus">Hampus</option>
                    <option value="Helena">Helena</option>
                    <option value="Elin">Elin</option>
                    <option value="Agnes">Agnes</option>
                </select>
        </form> 
    );
}

export default PlayerSelectionComp;