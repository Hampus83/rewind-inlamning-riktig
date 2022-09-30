import './GameSelectionComp.scss';

interface Props {
    game: string;
    setGame: (game: string) => void;
    noOfPlayers: number;
    setNoOfPlayers: (noOfPlayers: number) => void;
    date: string;
    setDate: (date: string) => void;
}

function GameSelectionComp({game, setGame, noOfPlayers, setNoOfPlayers, date, setDate}: Props) {

    return (
        <div className='game-wrapper'>
            <section className="container">
                <label htmlFor="games">Typ av sport/spel</label>
                <select value={game} name="games" id="games" onChange={(event) => {
                    const selectedGame = event.target.value;
                    setGame(selectedGame);
                }}>
                    <option hidden={true} value="">***välj sport***</option>
                    <option value="Hockey">Hockey</option>
                    <option value="Fotboll">Fotboll</option>
                    <option value="Singla slant">Singla slant</option>
                </select>
            </section>
            <section className="container">
                <label htmlFor="game">Antal spelare</label>
                <select value={noOfPlayers} name="players" id="players" onChange={(event) => {

                    const playersNumber: number = parseInt(event.target.value);
                    
                    setNoOfPlayers(playersNumber);
                }}>
                    <option hidden={true} value="">***antal spelare***</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
            </section>
            <section className="container">
                <label htmlFor="">Tid för spel</label>
                <input value={date} type="date" onChange={(event) => {

                    const date = event.target.value;

                    setDate(date);
                }}/>
            </section>
        </div>
    );
}

export default GameSelectionComp;