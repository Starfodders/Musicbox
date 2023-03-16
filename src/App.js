import "./App.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage/HomePage"
import SavedMusic from "./components/SavedMusic/SavedMusic"
import Header from "./components/Header/Header"

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path = '/' element = {<HomePage/>}/>
        <Route path = '/saved/' element = {<SavedMusic/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
