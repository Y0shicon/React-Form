import QuestionCard from './components/QuestionCard'

function App() {
  return (
    <div>
      <QuestionCard
        question="What is the capital of France?"
        answer="Paris"
        showAnswer={false}
        onToggleAnswer={() => {}}
        onCorrect={() => {}}
        onIncorrect={() => {}}
      />
    </div>
  )
}

export default App
