function ScoreBoard({ score,highestScore })   {
    return (
        <div className="score-board">
            <p> Score:{score}</p>
            <p> Highest Score:{highestScore}</p>
        </div>
    )
}
export default ScoreBoard;