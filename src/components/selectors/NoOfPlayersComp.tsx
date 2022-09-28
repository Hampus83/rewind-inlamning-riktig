import './NoOfPlayersComp.scss';

interface Props {
    game: string;
    setNoOfPlayers: (noOfPlayers: number) => void;
    setDate: (date: string) => void;
}

function NoOfPlayersComp({game, setNoOfPlayers, setDate}: Props) {
    
    return (
        <form className='players-form'>
            <label htmlFor="game">Antal spelare</label>
            <select name="players" id="players" onChange={(event) => {

                const playersNumber: number = parseInt(event.target.value);
                
                setNoOfPlayers(playersNumber);
            }}>
                <option value="DEFAULT">***antal spelare***</option>
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
            <label htmlFor="">Tid för spel</label>
            <input type="date" onChange={(event) => {

                const date = event.target.value;

                setDate(date);
            }}/>
        </form>
    )
} 
export default NoOfPlayersComp;