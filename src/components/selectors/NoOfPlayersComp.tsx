import './NoOfPlayersComp.scss';

import { Player } from '../../models/Results';

interface Props {
    game: string;
    setNoOfPlayers: (noOfPlayers: number) => void;
    // players: Player[];
    // setPlayers: (players: Player[]) => void;
}

function NoOfPlayersComp({game, setNoOfPlayers}: Props) {
    
    return (
        <form className='players-form'>
            <label htmlFor="game">Antal spelare</label>
            <select name="players" id="players" onChange={(event) => {
                const playersNumber: number = parseInt(event.target.value);
                // Lägg till en state för select-value och lägg till value=""
                setNoOfPlayers(playersNumber);

                // const emptyPlayers: Player[] = [];
                // setPlayers(emptyPlayers);
            }}>
                <option value="DEFAULT">***antal spelare***</option>
                <option value="1">1</option>
                <option value="2">2</option>
                {/* <option value="3">3</option>
                <option value="4">4</option> */}
            </select>
        </form>
    )
} 
export default NoOfPlayersComp;