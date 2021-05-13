import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BoardPage from './BoardPage';
import Board from '../components/Board';
import '../scss/HomePage.scss';


const HomePage = () => {

  const [board, setBoard] = useState("");
  const [boardList, setBoardList] = useState([{_id: "6098502bae5100bb913e", title: "chris", __v: 0}]);


  return(
    <div className="homePage">
      <h1>Project Boards</h1>
      <div className="board-container">
      {boardList.map((board, i) => <Board key={`card${i}`} board={board.title} />)}
      </div>

      <div className="inputBox">
        <input value={board} type='text' onChange={e => setBoard(e.target.value)}></input>
        {/* <button onClick={saveBoardHandler}>Create New Board</button> */}
  
      </div>
      
    </div>
  );
};

export default HomePage;