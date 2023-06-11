export default function QuestionCard({
    question,
    answer,
    showAnswer,
    onToggleAnswer,
    onCorrect,
    onIncorrect,
    }) {

    return (
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">{question}</h5>
            <p className="card-text">
            {showAnswer ? answer : <em>Click the button to reveal the answer</em>}
            </p>
            <button
            className="btn btn-primary"
            onClick={onToggleAnswer}
            >
            {showAnswer ? 'Hide Answer' : 'Show Answer'}
            </button>
            <button
            className="btn btn-success"
            onClick={onCorrect}
            >
            Correct
            </button>
            <button
            className="btn btn-danger"
            onClick={onIncorrect}
            >
            Incorrect
            </button>
        </div>
        </div>
    )
    }