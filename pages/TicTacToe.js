import { useState, useEffect } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState(null);
  const [gameMode, setGameMode] = useState("single-player"); // Add game mode state

  const handleCellClick = (row, col) => {
    if (winner) return;
    if (board[row][col] !== "") return;
    const newBoard = [...board];
    newBoard[row][col] = turn;
    setBoard(newBoard);
    checkWinner();
    if (gameMode === "multi-player") {
      setTurn(turn === "X" ? "O" : "X");
    } else if (gameMode === "single-player") {
      setTurn("O");
      computerMove();
    }
  };

  const computerMove = () => {
    const emptyCells = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === "") {
          emptyCells.push([i, j]);
        }
      }
    }
    if (emptyCells.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      const [row, col] = emptyCells[randomIndex];
      const newBoard = [...board];
      newBoard[row][col] = "O";
      setBoard(newBoard);
      checkWinner();
      setTurn("X");
    }
  };

  const checkWinner = () => {
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === board[i][1] &&
        board[i][1] === board[i][2] &&
        board[i][0] !== ""
      ) {
        setWinner(board[i][0]);
        return;
      }
      if (
        board[0][i] === board[1][i] &&
        board[1][i] === board[2][i] &&
        board[0][i] !== ""
      ) {
        setWinner(board[0][i]);
        return;
      }
    }
    if (
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2] &&
      board[0][0] !== ""
    ) {
      setWinner(board[0][0]);
      return;
    }
    if (
      board[0][2] === board[1][1] &&
      board[1][1] === board[2][0] &&
      board[0][2] !== ""
    ) {
      setWinner(board[0][2]);
      return;
    }
  };

  const handleClear = () => {
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setTurn("X");
    setWinner(null);
  };

  const handleGameModeChange = (mode) => {
    setGameMode(mode);
    handleClear();
  };

  return (
    <>
      <div className="flex justify-center my-10">
        <div className="grid grid-cols-3 gap-2">
          {board.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-col">
              {row.map((cell, colIndex) => (
                <button
                  key={colIndex}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                  className={`w-20 h-20 border-2 border-gray-500 text-3xl ${
                    cell === "X" ? "text-red-500" : "text-blue-500"
                  }`}
                >
                  {cell}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col mb-10 items-center">
        {winner && (
          <div className="text-3xl text-center mt-4">Winner: {winner}</div>
        )}
        <button
          className="bg-blue-500 w-20 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleClear}
        >
          Clear
        </button>
        <div className="mt-4">
          <button
            className={`bg-blue-500 w-20 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 ${
              gameMode === "single-player" ? "bg-green-500" : ""
            }`}
            onClick={() => handleGameModeChange("single-player")}
          >
            Single Player
          </button>
          <button
            className={`bg-blue-500 w-20 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
              gameMode === "multi-player" ? "bg-green-500" : ""
            }`}
            onClick={() => handleGameModeChange("multi-player")}
          >
            Multi Player
          </button>
        </div>
      </div>
    </>
  );
};

export default TicTacToe;
