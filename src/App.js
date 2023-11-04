import './App.css';
import React, { Fragment, useState } from 'react';

function Title({ name }) {
  return (
    <h1 className='title'>{name}</h1>
  )
}

function Square( {color} ) {
  let square;
  if (color === "white") {
    square = '#5A5A5A';
  }
  else {
    square = '#b7c0d8';
  }
  return (
    <div className='square' style={{'backgroundColor' : square}}></div>
  )
}

function Pawn( {color} ) {
  let pawn;
  if (color === "white") {
    pawn = '#FFFFFF';
  }
  else {
    pawn = '#000000';
  }
  return (
    <div className='pawn' style={{'color' : pawn}}>&#9817;</div>
  )
}

function Move() {

}

function Board() {
  return (
    <Fragment>
      <div className='first-board-container'>
        <div className='notation-col'>
          <div className='notation-number-col'>3</div>
          <div className='notation-number-col'>2</div>
          <div className='notation-number-col'>1</div>
        </div>
        <div className='col-container'>
          <div className='square-container'>
            <Square color={"blue"}/>
            <Pawn color={"white"}/>
          </div>
          <div className='square-container'>
            <Square color={"white"}/>
          </div>
          <div className='square-container'>
            <Square color={"blue"}/>
            <Pawn color={"black"}/>
          </div>
        </div>
        <div className='col-container'>
          <div className='square-container'>
            <Square color={"white"}/>
            <Pawn color={"white"}/>
          </div>
          <div className='square-container'>
            <Square color={"blue"}/>
          </div>
          <div className='square-container'>
            <Square color={"white"}/>
            <Pawn color={"black"}/>
          </div>
        </div>
        <div className='col-container'>
          <div className='square-container'>
            <Square color={"blue"}/>
            <Pawn color={"white"}/>
          </div>
          <div className='square-container'>
            <Square color={"white"}/>
          </div>
          <div className='square-container'>
            <Square color={"blue"}/>
            <Pawn color={"black"}/>
          </div>
        </div>
      </div>
      <div className='notation-row'>
        <div className='notation-number-row'>a</div>
        <div className='notation-number-row'>b</div>
        <div className='notation-number-row'>c</div>
      </div>
    </Fragment>
  )
}

function Game( {game} ) {
  return (
    <Fragment>
      <div className='board-container'>
        <Board/>
      </div>
      <div className='stats-container'>
        <h2>W/L: {game.wins}/{game.games}</h2>
        <h2>Latest Win: {game.lastwin}</h2>
      </div>
    </Fragment>   
  )
}

function HexapawnPage() {
  const [numWins, setNumWins] = useState(0);
  const [numGames, setNumGames] = useState(0);
  const [latestWin, setLatestWin] = useState('AI');
  const games = {
    wins: numWins,
    games: numGames,
    lastwin: latestWin
  };
  return (
    <div className='page-container'>
      <style>{'body { background-color: black; }'}</style>
      <div className='structure-container'>
        <div className='title-container'>
          <Title name="HEXAPAWN" />
        </div> 
        <div className='game-container'>
          <Game game={games}/>
        </div>    
      </div>
    </div>     
  )
}

export default HexapawnPage;
