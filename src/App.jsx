import { Route, Routes } from 'react-router-dom'
// import './App.css'
import { BreakfastPage } from './Recipes/RecipePages/BreakfastPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/recipe" element={<BreakfastPage />}/>
      </Routes>
    </>
  )
}

export default App
