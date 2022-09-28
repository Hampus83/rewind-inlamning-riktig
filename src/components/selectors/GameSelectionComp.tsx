import './GameSelectionComp.scss';

import { useState } from 'react';

interface Props {
    game: string;
    setGame: (game: string) => void;
}

function GameSelectionComp({game, setGame}: Props) {

    return (
        <form className='game-form'>
            <label htmlFor="games">Typ av sport/spel</label>
                <select name="games" id="games" onChange={(event) => {
                    const selectedGame = event.target.value;
                    setGame(selectedGame);
                }}>
                    <option value="DEFAULT">***välj sport***</option>
                    <option value="Hockey">Hockey</option>
                    <option value="Fotboll">Fotboll</option>
                    <option value="Singla Slant">Singla Slant</option>
                </select>
        </form>
    );
}

export default GameSelectionComp;