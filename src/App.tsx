import './App.css';
import Header from './components/Header';
import GameSelectionComp from './components/selectors/GameSelectionComp'
import TeamsContainer from './components/TeamsContainer';
import PlayedGamesList from './components/list/PlayedGamesList';

import { useState } from 'react';

import { Results } from './models/Results';

function App() {

  const [results, setResults] = useState<Results[]>([
    {
        game: 'Hockey',
        date: '2022-09-25',
        playerOneName: 'Hampus',
        playerOneResult: 'won',
        playerTwoName: 'Helena',
        playerTwoResult: 'lost',
        id: 1
    },
    {
        game: 'Fotboll',
        date: '2022-08-20',
        playerOneName: 'Hampus',
        playerOneResult: 'won',
        playerTwoName: 'Helena',
        playerTwoResult: 'lost',
        id: 2
    },
    {
        game: 'Fotboll',
        date: '2022-08-30',
        playerOneName: 'Hampus',
        playerOneResult: 'lost',
        playerTwoName: 'Helena',
        playerTwoResult: 'won',
        id: 3
    },
    {
        game: 'Hockey',
        date: '2022-07-20',
        playerOneName: 'Helena',
        playerOneResult: 'won',
        playerTwoName: 'Elin',
        playerTwoResult: 'lost',
        id: 4
    },
    {
        game: 'Fotboll',
        date: '2022-08-23',
        playerOneName: 'Agnes',
        playerOneResult: 'lost',
        playerTwoName: 'Hampus',
        playerTwoResult: 'won',
        id: 5
    },
    {
        game: 'Fotboll',
        date: '2022-09-03',
        playerOneName: 'Elin',
        playerOneResult: 'won',
        playerTwoName: 'Agnes',
        playerTwoResult: 'lost',
        id: 6
    },
    {
        game: 'Hockey',
        date: '2022-05-05',
        playerOneName: 'Hampus',
        playerOneResult: 'lost',
        playerTwoName: 'Agnes',
        playerTwoResult: 'won',
        id: 7
    },
    {
        game: 'Hockey',
        date: '2022-08-14',
        playerOneName: 'Agnes',
        playerOneResult: 'won',
        playerTwoName: 'Helena',
        playerTwoResult: 'lost',
        id: 8
    },
    {
        game: 'Fotboll',
        date: '2022-07-28',
        playerOneName: 'Elin',
        playerOneResult: 'won',
        playerTwoName: 'Helena',
        playerTwoResult: 'lost',
        id: 9
    },
    {
        game: 'Singla slant',
        date: '2022-04-24',
        playerOneName: 'Elin',
        playerOneResult: 'lost',
        playerTwoName: 'Agnes',
        playerTwoResult: 'won',
        id: 10
    },
    {
        game: 'Singla slant',
        date: '2022-05-29',
        playerOneName: 'Hampus',
        playerOneResult: 'won',
        playerTwoName: 'Agnes',
        playerTwoResult: 'lost',
        id: 11
    },
  ]);
  const [game, setGame] = useState<string>('');
  const [noOfPlayers, setNoOfPlayers] = useState<number>(0);
  const [playerOneName, setPlayerOneName] = useState<string>('');
  const [playerOneResult, setPlayerOneResult] = useState<string>('');
  const [playerTwoName, setPlayerTwoName] = useState<string>('');
  const [playerTwoResult, setPlayerTwoResult] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [chosenName, setChosenName] = useState<string>('');

  return (
    <div className="App">
      <Header />
      <GameSelectionComp 
        game={game} setGame={setGame}
        noOfPlayers={noOfPlayers} setNoOfPlayers={setNoOfPlayers} 
        date={date} setDate={setDate}
      />
      <TeamsContainer 
        noOfPlayers={noOfPlayers} setNoOfPlayers={setNoOfPlayers}
        playerOneName={playerOneName} setPlayerOneName={setPlayerOneName}
        playerTwoName={playerTwoName} setPlayerTwoName={setPlayerTwoName}
        game={game} setGame={setGame}
        results={results} setResults={setResults}
        date={date} setDate={setDate}
        playerOneResult={playerOneResult} setPlayerOneResult={setPlayerOneResult}
        playerTwoResult={playerTwoResult} setPlayerTwoResult={setPlayerTwoResult}
        chosenName={chosenName} setChosenName={setChosenName}
      />
      <PlayedGamesList 
        results={results} setResults={setResults}
      />
    </div>
  );
}

export default App;

// https://rewind-inlamning.onrender.com/