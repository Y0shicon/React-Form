import { useState } from 'react'
import QuestionCard from './components/QuestionCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <QuestionCard
        question="What is the capital of France?"
        answer="Paris"
        showAnswer={false}
        onToggleAnswer={() => {this.showAnswer = !this.showAnswer}}
        onCorrect={() => {}}
        onIncorrect={() => {}}
      />
    </div>
  )
}

export default App
