import './App.css';
import Header from './components/Header';
import GameSelectionComp from './components/selectors/GameSelectionComp'
import NoOfPlayersComp from './components/selectors/NoOfPlayersComp';
import TeamsContainer from './components/TeamsContainer';
import PlayedGamesList from './components/list/PlayedGamesList';

import { useState } from 'react';

import { Results } from './models/Results';
import { Player } from './models/Results';
import { Game } from './models/Results';

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
        playerOneName: 'Elin',
        playerOneResult: 'won',
        playerTwoName: 'Helena',
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
        playerTwoName: '',
        playerTwoResult: '',
        id: 10
    },
    {
        game: 'Singla slant',
        date: '2022-05-29',
        playerOneName: 'Hampus',
        playerOneResult: 'won',
        playerTwoName: '',
        playerTwoResult: '',
        id: 11
    },
  ]);
  // const [results, setResults] = useState<Results[]>([
  //   {
  //       game: 'Hockey',
  //       date: '2022-09-25',
  //       teamOneResult: 9,
  //       teamTwoResult: 10, 
  //       players: [
  //           {
  //               name: 'Elin',
  //               team: 'one',
  //               won: false
  //           },
  //           {
  //               name: 'Agnes',
  //               team: 'two',
  //               won: true
  //           }
  //       ],
  //       id: 1
  //   },
  //   {
  //       game: 'Fotboll',
  //       date: '2022-08-20',
  //       teamOneResult: 10,
  //       teamTwoResult: 5, 
  //       players: [
  //           {
  //               name: 'Hampus',
  //               team: 'one',
  //               won: true
  //           },
  //           {
  //               name: 'Agnes',
  //               team: 'two',
  //               won: false
  //           },
  //           {
  //               name: 'Elin',
  //               team: 'one',
  //               won: true
  //           },
  //           {
  //               name: 'Helena',
  //               team: 'two',
  //               won: false
  //           }
  //       ],
  //       id: 2
  //   },
  //   {
  //       game: 'Fotboll',
  //       date: '2022-08-30',
  //       teamOneResult: 10,
  //       teamTwoResult: 2, 
  //       players: [
  //           {
  //               name: 'Hampus',
  //               team: 'one',
  //               won: true
  //           },
  //           {
  //               name: 'Helena',
  //               team: 'two',
  //               won: false
  //           }
  //       ],
  //       id: 3
  //   },
  //   {
  //       game: 'Hockey',
  //       date: '2022-07-20',
  //       teamOneResult: 6,
  //       teamTwoResult: 10, 
  //       players: [
  //           {
  //               name: 'Hampus',
  //               team: 'one',
  //               won: false
  //           },
  //           {
  //               name: 'Elin',
  //               team: 'two',
  //               won: true
  //           }
  //       ],
  //       id: 4
  //   },
  //   {
  //       game: 'Fotboll',
  //       date: '2022-08-23',
  //       teamOneResult: 10,
  //       teamTwoResult: 8, 
  //       players: [
  //           {
  //               name: 'Helena',
  //               team: 'one',
  //               won: true
  //           },
  //           {
  //               name: 'Elin',
  //               team: 'two',
  //               won: false
  //           },
  //           {
  //               name: 'Hampus',
  //               team: 'one',
  //               won: true
  //           },
  //           {
  //               name: 'Agnes',
  //               team: 'two',
  //               won: false
  //           }
  //       ],
  //       id: 5
  //   },
  //   {
  //       game: 'Fotboll',
  //       date: '2022-09-03',
  //       teamOneResult: 10,
  //       teamTwoResult: 4, 
  //       players: [
  //           {
  //               name: 'Elin',
  //               team: 'one',
  //               won: true
  //           },
  //           {
  //               name: 'Agnes',
  //               team: 'two',
  //               won: false
  //           }
  //       ],
  //       id: 6
  //   },
  //   {
  //       game: 'Hockey',
  //       date: '2022-05-05',
  //       teamOneResult: 10,
  //       teamTwoResult: 9, 
  //       players: [
  //           {
  //               name: 'Helena',
  //               team: 'one',
  //               won: true
  //           },
  //           {
  //               name: 'Hampus',
  //               team: 'two',
  //               won: false
  //           }
  //       ],
  //       id: 7
  //   },
  //   {
  //       game: 'Hockey',
  //       date: '2022-08-14',
  //       teamOneResult: 10,
  //       teamTwoResult: 5, 
  //       players: [
  //           {
  //               name: 'Hampus',
  //               team: 'one',
  //               won: true
  //           },
  //           {
  //               name: 'Agnes',
  //               team: 'two',
  //               won: false
  //           }
  //       ],
  //       id: 8
  //   },
  //   {
  //       game: 'Fotboll',
  //       date: '2022-07-28',
  //       teamOneResult: 10,
  //       teamTwoResult: 1, 
  //       players: [
  //           {
  //               name: 'Agnes',
  //               team: 'one',
  //               won: true
  //           },
  //           {
  //               name: 'Helena',
  //               team: 'two',
  //               won: false
  //           },
  //           {
  //               name: 'Hampus',
  //               team: 'one',
  //               won: true
  //           },
  //           {
  //               name: 'Elin',
  //               team: 'two',
  //               won: false
  //           }
  //       ],
  //       id: 9
  //   },
  //   {
  //       game: 'Singla slant',
  //       date: '2022-04-24',
  //       teamOneResult: 0,
  //       teamTwoResult: 0, 
  //       players: [
  //           {
  //               name: 'Hampus',
  //               team: 'one',
  //               won: false
  //           }
  //       ],
  //       id: 10
  //   },
  //   {
  //       game: 'Singla slant',
  //       date: '2022-05-29',
  //       teamOneResult: 1,
  //       teamTwoResult: 0, 
  //       players: [
  //           {
  //               name: 'Elin',
  //               team: 'one',
  //               won: true
  //           }
  //       ],
  //       id: 11
  //   },
  // ]);
  const [game, setGame] = useState<string>('');
  const [noOfPlayers, setNoOfPlayers] = useState<number>(1);
  // const [players, setPlayers] = useState<Player[]>([
  //   {
  //     name: '',
  //     team: '',
  //     won: false
  //   }
  // ]);
  const [teamOneResult, setTeamOneResult] = useState<number>(0);
  const [teamTwoResult, setTeamTwoResult] = useState<number>(0);
  const [teamOne, setTeamOne] = useState(); // kanske inte behöver denna ändå..?
  const [teamTwo, setTeamTwo] = useState(); // kanske inte behöver denna ändå..?
  const [team, setTeam] = useState<string>('');
  const [won, setWon] = useState<boolean>(false);
  //NEDAN LIGGER NYA STATES FRÅN MITT FÖRSÖK ATT FÖRENKLA
  const [playerOneName, setPlayerOneName] = useState<string>('');
  const [playerOneResult, setPlayerOneResult] = useState<string>('');
  const [playerTwoName, setPlayerTwoName] = useState<string>('');
  const [playerTwoResult, setPlayerTwoResult] = useState<string>('');
  const [newGame, setNewGame] = useState<Game[]>([
    {
      game: '',
      date: '',
      playerOneName: '',
      playerOneResult: '',
      playerTwoName: '',
      playerTwoResult: '',
      id: 0
    }
  ]);

  return (
    <div className="App">
      <Header />
      <GameSelectionComp 
        game={game} setGame={setGame}
      />
      <NoOfPlayersComp 
        game={game} 
        setNoOfPlayers={setNoOfPlayers} 
        // players={players} setPlayers={setPlayers} 
      />
      <TeamsContainer 
        noOfPlayers={noOfPlayers} 
        // players={players} setPlayers={setPlayers} 
        teamOneResult={teamOneResult} setTeamOneResult={setTeamOneResult}
        teamTwoResult={teamTwoResult} setTeamTwoResult={setTeamTwoResult}
        team={team} setTeam={setTeam}
        newGame={newGame} setNewGame={setNewGame}
        playerOneName={playerOneName} setPlayerOneName={setPlayerOneName}
        playerTwoName={playerTwoName} setPlayerTwoName={setPlayerTwoName}
        game={game}
        results={results} setResults={setResults}
        
      />
      <PlayedGamesList 
        results={results} 
      />
    </div>
  );
}

export default App;