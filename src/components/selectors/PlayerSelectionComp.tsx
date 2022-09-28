import './PlayerSelectionComp.scss';

import { Player } from '../../models/Results';
import { Game } from '../../models/Results';

interface Props {
    // players: Player[];
    // setPlayers: (players: Player[]) => void;
    team: string;
    setTeam: (team: string) => void;
    newGame: Game[];
    setNewGame: (newGame: Game[]) => void;
    playerOneName: string;
    setPlayerOneName: (playerOneName: string) => void;
    playerTwoName: string;
    setPlayerTwoName: (playerTwoName: string) => void;
    
}

function PlayerSelectionComp({team, setTeam, newGame, setNewGame, playerOneName, setPlayerOneName, playerTwoName, setPlayerTwoName}: Props) {

    function emptyNameState(event: any) {
        // if (playerOneName) {
        //     setPlayerOneName('');
        // } else if (playerTwoName) {
        //     setPlayerTwoName('');
        // }
        console.log(event.target.value); 
    }

    return (
        <form className='playernames-form'>
            <label htmlFor="player-names">Namn:</label>
                <select className='winning-team' name="player-names" onClick={emptyNameState} onChange={(event) => {
                    // const selectedPlayer = {
                    //     name: event.target.value,
                    //     team: '',
                    //     won: false
                    // }

                    // let playersCopy = [...players];
                    // playersCopy.push(selectedPlayer);
                    // setPlayers(playersCopy);

                    const selectedName = event.target.value;
                    if (playerOneName) {
                        setPlayerTwoName(selectedName);
                    } else {
                        setPlayerOneName(selectedName);
                    }
                    
                }}>
                    <option value="">***välj namn***</option>
                    <option value="hampus">Hampus</option>
                    <option value="helena">Helena</option>
                    <option value="elin">Elin</option>
                    <option value="agnes">Agnes</option>
                </select>
            {/* <label htmlFor="teams">Lag:</label>
                <select name="team" id="team" onChange={(event) => {
                    const selectedTeam = {
                        name: '',
                        team: event.target.value,
                        won: false
                    }

                    let playersCopy = [...players];
                    playersCopy.push(selectedTeam);
                    setPlayers(playersCopy);
                    
                }}>
                    <option value="DEFAULT">***välj lag***</option>
                    <option value="one">1</option>
                    <option value="two">2</option>
                </select> */}
        </form> 
    );
}

export default PlayerSelectionComp;